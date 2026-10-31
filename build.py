"""Assemble les briques en une page unique (dist/calcada.html) pour l'aperçu en ligne.
Le site modulaire (index.html + css/ + js/) reste la source de travail.
Usage : python3 build.py
"""
import re, pathlib

root = pathlib.Path(__file__).parent
html = (root / 'index.html').read_text(encoding='utf-8')

def inline_css(m):
    return '<style>\n' + (root / m.group(1)).read_text(encoding='utf-8') + '\n</style>'

def inline_js(m):
    return '<script>\n' + (root / m.group(1)).read_text(encoding='utf-8') + '\n</script>'

html = re.sub(r'<link rel="stylesheet" href="(css/[^"]+)">', inline_css, html)
html = re.sub(r'<script src="(js/[^"]+)"></script>', inline_js, html)
# Le publieur d'artifact fournit lui-même doctype/html/head/body
for tag in ['<!DOCTYPE html>', '<html lang="fr">', '</html>', '<head>', '</head>', '<body>', '</body>',
            '<meta charset="UTF-8">',
            '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">']:
    html = html.replace(tag, '')
html = re.sub(r'\n{3,}', '\n\n', html).strip() + '\n'

out = root / 'dist' / 'calcada.html'
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding='utf-8')
print(out, len(html), 'octets')
