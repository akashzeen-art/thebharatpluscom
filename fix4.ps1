$f = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'
$lines = [System.IO.File]::ReadAllLines($f, [System.Text.Encoding]::UTF8)

$fixed = New-Object System.Collections.Generic.List[string]
$seenChase = $false

foreach ($line in $lines) {
    # Replace any p tag with text-[10px] that contains Spotlight (regardless of encoding)
    if ($line -match 'text-\[10px\]' -and $line -match 'Spotlight') {
        $fixed.Add('                          <p className="text-[10px] uppercase tracking-[0.4em] text-green-400">Spotlight · Action</p>')
        continue
    }
    # Replace any p tag with text-[9px] that contains Chase
    if ($line -match 'text-\[9px\]' -and $line -match 'Chase') {
        if (-not $seenChase) {
            $fixed.Add('                          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">Chase · Mission</p>')
            $seenChase = $true
        }
        continue
    }
    $fixed.Add($line)
}

[System.IO.File]::WriteAllLines($f, $fixed, [System.Text.Encoding]::UTF8)
Write-Host "Done - fixed $(($fixed | Select-String 'Spotlight').Count) spotlight lines"
