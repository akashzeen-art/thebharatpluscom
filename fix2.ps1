$f = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$old = [regex]::Escape('<p className="text-[10px] uppercase tracking-[0.4em] text-green-400>Spotlight')
$pattern = '(?s)<p className[^>]*text-\[10px\][^<]*</p>[\s\S]*?<p [^>]*text-\[9px\][^<]*Chase[^<]*</p>[\s\S]*?<p [^>]*text-\[9px\][^<]*Chase[^<]*</p>'
$replacement = '<p className="text-[10px] uppercase tracking-[0.4em] text-green-400">Spotlight · Action</p>' + "`r`n" + '                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">Chase · Mission</p>'

$c = [regex]::Replace($c, $pattern, $replacement)
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Done"
