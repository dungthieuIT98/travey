# Quick deploy script - tự động tạo commit message với timestamp
Write-Host "⚡ Quick Deploy Script" -ForegroundColor Yellow

$timestamp = Get-Date -Format "dd/MM/yyyy HH:mm:ss"
$commitMessage = "Auto deploy: $timestamp"

# Kiểm tra có thay đổi nào không
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-Host "✅ Không có thay đổi nào để commit" -ForegroundColor Yellow
    exit 0
}

try {
    Write-Host "📁 Adding all changes..." -ForegroundColor Cyan
    git add .
    
    Write-Host "💾 Committing: $commitMessage" -ForegroundColor Cyan
    git commit -m "$commitMessage"
    
    Write-Host "🔄 Pushing to remote..." -ForegroundColor Cyan
    git push origin main
    
    Write-Host "✅ Quick deploy thành công!" -ForegroundColor Green
    Write-Host "📝 Commit message: $commitMessage" -ForegroundColor Blue
    Write-Host "🚀 Website: https://dungthieuIT98.github.io/travey/" -ForegroundColor Magenta
    Write-Host "⏳ Đợi 2-3 phút để GitHub Actions deploy xong" -ForegroundColor Yellow
}
catch {
    Write-Host "❌ Lỗi: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}