# 🚀 TradeVeil - B2B Wholesale Platform

[![Deploy to GitHub Pages](https://github.com/dungthieuIT98/travey/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/dungthieuIT98/travey/actions)

## 🌐 Live Demo
Website sẽ được tự động deploy tại: **https://dungthieuIT98.github.io/travey/**

## ✨ Tính năng Auto Deploy

### 🔄 Workflow tự động:
1. **Push code** lên branch `main`
2. **GitHub Actions** tự động build và deploy
3. **Website live** trong vòng 2-3 phút

### 📁 Cấu trúc dự án:
```
TradeVeil/
├── 📄 index.html          # Landing page (redirect)
├── 📁 html/               # Main HTML files
├── 📁 css/                # Stylesheets
├── 📁 js/                 # JavaScript files
├── 📁 images/             # Assets
└── 📁 .github/workflows/  # GitHub Actions
```

## 🛠️ Cách deploy:

### Method 1: Quick Deploy
```bash
# Sử dụng script có sẵn
quick-deploy.bat
```

### Method 2: Manual Deploy
```bash
git add .
git commit -m "Update website"
git push origin main
```

### Method 3: NPM Scripts
```bash
npm run deploy
```

## 🔧 Setup Instructions:

### 1. Kích hoạt GitHub Pages:
- Vào **Repository Settings**
- Chọn **Pages** trong sidebar
- Source: **GitHub Actions**
- Save ✅

### 2. Kiểm tra Deploy Status:
- Vào tab **Actions** trong repository
- Xem workflow **"Deploy to GitHub Pages"**
- ✅ = Deploy thành công
- ❌ = Có lỗi cần fix

## 📊 Deploy Status:

Sau mỗi lần push lên main:
- ⏳ **Building**: 1-2 phút
- 🚀 **Deploying**: 30 giây
- ✅ **Live**: Website được cập nhật

## 🐛 Troubleshooting:

### Nếu website không hiển thị:
1. Kiểm tra GitHub Pages settings
2. Xem logs trong Actions tab
3. Đảm bảo có file `index.html` ở root

### Nếu CSS/JS không load:
1. Kiểm tra đường dẫn relative paths
2. Đảm bảo folder structure đúng
3. Xem Console errors trong browser

## 📞 Support:
- GitHub Issues: [Create Issue](https://github.com/dungthieuIT98/travey/issues)
- Email: support@tradeveil.com

---
⭐ **Star this repo nếu bạn thấy hữu ích!**