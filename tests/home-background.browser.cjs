/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS browser test uses NODE_PATH for the pinned test runner. */
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const rules = require('../app/rules-data.json');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

let base = process.env.REDQUADRANT_BASE_URL;
let server;

(async () => {
  if (!base) {
    const root = path.resolve('out');
    const prefix = process.env.GITHUB_PAGES_BASE_PATH || '';
    server = http.createServer((req, res) => {
      try {
        let route = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        if (prefix && route.startsWith(prefix + '/')) route = route.slice(prefix.length);
        let file = path.resolve(root, '.' + route);
        if (file !== root && !file.startsWith(root + path.sep)) throw new Error('Invalid path');
        if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
        const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.woff2': 'font/woff2' };
        res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
        res.end(fs.readFileSync(file));
      } catch { res.writeHead(404); res.end(); }
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    base = 'http://127.0.0.1:' + server.address().port + prefix + '/';
  }
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  try {
    for (const width of [1365, 390]) {
      for (const reducedMotion of ['no-preference', 'reduce']) {
        const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion });
        await page.addInitScript(() => { Math.random = () => 0.5; });
        await page.goto(base, { waitUntil: 'domcontentloaded' });
        await page.waitForFunction(expected => document.querySelector('.practice-rule p')?.textContent === expected, rules[128]);
        const landscape = page.locator('#home-landscape');
        await landscape.waitFor({ state: 'attached' });
        assert.equal(await page.getByRole('button', { name: /(?:play|pause) (?:background|animation)/i }).count(), 0);
        assert.equal(await page.locator('.home-motion-toggle').count(), 0);
        assert.equal(await landscape.evaluate(video => video.controls || video.loop), false);
        assert.equal(await landscape.getAttribute('aria-hidden'), 'true');
        assert(await landscape.getAttribute('poster'));
        assert.match(await page.locator('.home-stage').evaluate(element => getComputedStyle(element).backgroundImage), /url\(/);
        if (reducedMotion === 'no-preference') {
          await page.waitForFunction(() => !document.querySelector('#home-landscape').paused, undefined, { timeout: 10000 });
          await page.waitForFunction(() => {
            const video = document.querySelector('#home-landscape');
            return video.paused && !video.classList.contains('is-playing');
          }, undefined, { timeout: 5500 });
          const seconds = await landscape.evaluate(video => video.currentTime);
          assert(seconds > 0 && seconds < 5, `Decorative motion must end before five seconds, got ${seconds}`);
          assert.equal(await landscape.evaluate(video => getComputedStyle(video).opacity), '0');
          await page.emulateMedia({ reducedMotion: 'reduce' });
          await page.emulateMedia({ reducedMotion: 'no-preference' });
          assert.equal(await landscape.evaluate(video => video.paused), true, 'Changing the preference must not restart finished motion');
        } else {
          await page.waitForLoadState('networkidle');
          assert.equal(await landscape.evaluate(video => video.paused), true);
          assert.equal(await landscape.evaluate(video => video.currentTime), 0);
          assert.equal(await landscape.evaluate(video => getComputedStyle(video).display), 'none');
        }
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2));
        checks.push(`${width}px / ${reducedMotion}: no controls, still fallback, bounded motion, no overflow`);
        await page.close();
      }
    }
    console.log(JSON.stringify({ status: 'passed', base, checks }));
  } finally {
    await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
