"""Publish the maintained programme record without re-authoring its facts."""
import json
from pathlib import Path

root=Path(__file__).resolve().parents[1]
source=root/'content/programmes/leading-transformation.json'
record=json.loads(source.read_text(encoding='utf-8'))
assert record['canonicalUrl']=='https://redquadrant.com/records/leading-transformation.json'
assert [module['number'] for module in record['modules']]==list(range(1,25))
assert len({module['title'] for module in record['modules']})==24
assert record['routes']['toolshed']['fee']['currency']=='GBP'
assert record['routes']['psta']['fee']['currency']=='GBP'
destination=root/'public/records/leading-transformation.json'
destination.parent.mkdir(parents=True,exist_ok=True)
destination.write_bytes(source.read_bytes())
print('Published the current 24-module programme record and two delivery routes.')
