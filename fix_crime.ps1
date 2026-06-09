$f = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\pages\Index.tsx'
$lines = [System.IO.File]::ReadAllLines($f, [System.Text.Encoding]::UTF8)

# Line 661 (index 660) has outer div, line 662 (index 661) has duplicate inner div - remove the duplicate
# and add missing closing div before </AnimatedSection>

$result = New-Object System.Collections.Generic.List[string]
$i = 0
while ($i -lt $lines.Length) {
    $line = $lines[$i]
    # Remove the duplicate nested max-w-7xl div (index 661 = line 662)
    if ($i -eq 661 -and $line -match 'max-w-7xl mx-auto mb-10') {
        $i++
        continue
    }
    # Before </AnimatedSection> at line 686 (index 685), add missing </div>
    if ($i -eq 685 -and $line -match '</AnimatedSection>') {
        $result.Add('              </div>')
    }
    $result.Add($line)
    $i++
}

[System.IO.File]::WriteAllLines($f, $result, [System.Text.Encoding]::UTF8)
Write-Host "Done"
