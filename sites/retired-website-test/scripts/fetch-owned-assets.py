"""Restore pinned, owned assets for GitHub Pages builds. No legacy-host dependency."""
from pathlib import Path
import hashlib,json,urllib.request,concurrent.futures
root=Path(__file__).resolve().parents[1]
d=json.loads((root/'scripts/owned-assets.json').read_text())
def restore(a):
 p=(root/'public'/a['path']).resolve()
 if (root/'public').resolve() not in p.parents:raise ValueError('Unsafe asset path')
 if p.exists() and hashlib.sha256(p.read_bytes()).hexdigest()==a['sha256']:return
 with urllib.request.urlopen(d['origin']+'/'+a['path'],timeout=60) as r:content=r.read()
 if len(content)!=a['bytes'] or hashlib.sha256(content).hexdigest()!=a['sha256']:raise ValueError('Asset verification failed: '+a['path'])
 p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(content)
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:list(pool.map(restore,d['assets']))
print('Verified',len(d['assets']),'owned assets')
