$f = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'
$lines = [System.IO.File]::ReadAllLines($f, [System.Text.Encoding]::UTF8)

# Find lines containing the broken spotlight/chase text and fix them
for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'text-\[10px\].*Spotlight') {
        $lines[$i] = '                          <p className="text-[10px] uppercase tracking-[0.4em] text-green-400">Spotlight · Action</p>'
    }
    if ($lines[$i] -match 'text-\[9px\].*Chase') {
        $lines[$i] = '                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">Chase · Mission</p>'
    }
}

# Remove duplicate consecutive identical lines
$result = New-Object System.Collections.Generic.List[string]
$prev = $null
foreach ($line in $lines) {
    if ($line -eq $prev -and $line -match 'Chase') { continue }
    $result.Add($line)
    $prev = $line
}

[System.IO.File]::WriteAllLines($f, $result, [System.Text.Encoding]::UTF8)
Write-Host "Done"
