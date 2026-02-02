# Script tự động deploy lên Git
# Sử dụng: .\deploy.ps1 "commit message"

param(
    [Parameter(Mandatory=$true)]
    [string]$CommitMessage
)

Write-Host "🚀 Bắt đầu quá trình deploy..." -ForegroundColor Green

# Kiểm tra có thay đổi nào không
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-Host "✅ Không có thay đổi nào để commit" -ForegroundColor Yellow
    exit 0
}

try {
    # Add tất cả file thay đổi
    Write-Host "📁 Adding files..." -ForegroundColor Cyan
    git add .
    
    # Commit với message
    Write-Host "💾 Committing changes..." -ForegroundColor Cyan
    git commit -m "$CommitMessage"
    
    # Push lên remote
    Write-Host "🔄 Pushing to remote..." -ForegroundColor Cyan
    git push origin main
    
    Write-Host "✅ Deploy thành công!" -ForegroundColor Green
    Write-Host "🌐 Repository: https://github.com/dungthieuIT98/travey.git" -ForegroundColor Blue
    Write-Host "🚀 Website sẽ được cập nhật tại: https://dungthieuIT98.github.io/travey/" -ForegroundColor Magenta
    Write-Host "⏳ Đợi 2-3 phút để GitHub Actions hoàn thành deploy" -ForegroundColor Yellow
}
catch {
    Write-Host "❌ Lỗi trong quá trình deploy: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}