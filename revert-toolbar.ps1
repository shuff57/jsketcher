# Revert script for HeadsUpToolbar changes (PowerShell)

Write-Host "Reverting HeadsUpToolbar to original state..." -ForegroundColor Yellow

# Copy backup files back
Copy-Item "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.jsx.backup" "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.jsx" -Force
Copy-Item "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.less.backup" "C:\Users\shuff\OneDrive\Documents\GitHub\jsketcher\web\app\cad\dom\components\HeadsUpToolbar.less" -Force

Write-Host "HeadsUpToolbar reverted to original state." -ForegroundColor Green
Write-Host "Restart the application to see changes." -ForegroundColor Cyan
