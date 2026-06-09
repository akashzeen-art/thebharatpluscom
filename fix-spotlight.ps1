$file = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'
$content = Get-Content $file -Raw
$content = $content -replace 'Spotlight A\u00fa Thriller', 'Spotlight · Action'
$content = $content -replace 'Psychological A\u00fa Series', 'Chase · Mission'
$content = $content -replace 'text-\[10px\] uppercase tracking-\[0\.4em\] text-red-400', 'text-[10px] uppercase tracking-[0.4em] text-green-400'
$content = $content -replace 'text-\[9px\] uppercase tracking-\[0\.2em\] text-gray-600', 'text-[9px] uppercase tracking-[0.2em] text-gray-500'
$content = $content -replace 'text-red-400/60 mb-2">The Final Revelation', 'text-green-400/60 mb-2">High Octane Chase'
$content = $content -replace '                          DANGEROUS<br />', '                          ESCAPE<br />'
$content = $content -replace 'from-red-500 to-orange-400">MINDS', 'from-green-400 to-emerald-300">ROUT 21'
$content = $content -replace 'A psychological thriller that dives deep into the criminal mind\. Four gripping episodes that unravel the darkest secrets of those who walk among us \?" hiding in plain sight\.', 'A pulse-pounding action thriller where one man races against time on a deadly route. No backup. No mercy. No way out.'
$content = $content -replace '"Psychological","Crime","Series","Dark Drama"', '"Action","Chase","Survival","Mission"'
$content = $content -replace 'bg-red-500/10 text-red-300 border border-red-500/30', 'bg-green-500/10 text-green-300 border border-green-500/30'
Set-Content $file $content
