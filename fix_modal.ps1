$f = 'c:\Users\Pooja Jain\Downloads\thriller-ott-platform-b1e\client\components\VideoModal.tsx'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c -replace 'max-w-3xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl', 'max-w-3xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl modal-animate'
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Done"
