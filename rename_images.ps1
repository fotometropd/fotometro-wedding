$i = 1
Get-ChildItem -Path "c:\Users\FOTOMETRO\Desktop\fotometro-wedding\public\images\gallery" -Filter *.jpg | ForEach-Object {
    $newName = "fotometro-wedding-$($i.ToString('00')).jpg"
    Rename-Item $_.FullName -NewName $newName
    $i++
}
