$f = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'
$lines = [System.IO.File]::ReadAllLines($f, [System.Text.Encoding]::UTF8)

$result = New-Object System.Collections.Generic.List[string]
$i = 0
while ($i -lt $lines.Length) {
    $line = $lines[$i]
    # Join any line ending with a split class name (ends mid-word without closing quote)
    if ($line -match 'border border$' -or $line -match 'hover:text-white$' -and -not $line -match '">') {
        if ($i + 1 -lt $lines.Length) {
            $nextLine = $lines[$i + 1]
            if ($nextLine -match '^-') {
                $result.Add($line.TrimEnd() + $nextLine.TrimStart())
                $i += 2
                continue
            }
        }
    }
    $result.Add($line)
    $i++
}

[System.IO.File]::WriteAllLines($f, $result, [System.Text.Encoding]::UTF8)
Write-Host "Done - $($result.Count) lines"
