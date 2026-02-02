@echo off
echo 🚀 TradeVeil Auto Deploy
echo.
if "%1"=="" (
    echo ❌ Vui lòng cung cấp commit message
    echo Sử dụng: deploy.bat "your commit message"
    echo Hoặc: quick-deploy.bat để sử dụng timestamp tự động
    pause
    exit /b 1
)

powershell -ExecutionPolicy Bypass -File ".\deploy.ps1" "%1"
pause