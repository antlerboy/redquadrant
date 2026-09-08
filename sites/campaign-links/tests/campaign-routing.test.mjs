import test from "node:test";
import assert from "node:assert/strict";
import {campaigns,campaignDestination} from "../lib/campaign-routing.mjs";
for (const [host, destination] of Object.entries(campaigns)) {
  for (const scheme of ["http", "https"]) for (const prefix of ["", "www."]) {
    test(`${scheme}://${prefix}${host} directs to the correct offer`,()=>{
      assert.equal(campaignDestination(new Request(`${scheme}://${prefix}${host}/old/path?utm_source=campaign`)),`${destination}?utm_source=campaign`);
    });
  }
}
test("unknown hosts and URL injection do not redirect",()=>{
  for (const host of ["unrelated.example", "systemleadership.com.evil.example"]) assert.equal(campaignDestination(new Request(`https://${host}/?url=https://evil.example`)),null);
});
test("proxy host can select only a known campaign",()=>{
  assert.equal(campaignDestination(new Request("https://worker.internal/path",{headers:{"x-forwarded-host":"www.systemsleadership.academy"}})),campaigns["systemsleadership.academy"]);
  assert.equal(campaignDestination(new Request("https://worker.internal/",{headers:{"x-forwarded-host":"https://evil.example"}})),null);
});
