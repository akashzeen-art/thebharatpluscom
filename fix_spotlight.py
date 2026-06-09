import re

path = r'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Spotlight line
content = re.sub(
    r'<p className="text-\[10px\] uppercase tracking-\[0\.4em\] text-green-400[^"]*">.*?</p>',
    '<p className="text-[10px] uppercase tracking-[0.4em] text-green-400">Spotlight \u00b7 Action</p>',
    content
)

# Fix Chase line (may have broken quotes)
content = re.sub(
    r'<p className[^>]*text-\[9px\][^>]*>.*?Mission.*?</p>',
    '<p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">Chase \u00b7 Mission</p>',
    content
)

# Remove duplicate lines
content = re.sub(
    r'(<p className="text-\[9px\] uppercase tracking-\[0\.2em\] text-gray-500">Chase \xb7 Mission</p>\s*){2,}',
    '<p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">Chase \u00b7 Mission</p>\n',
    content
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
