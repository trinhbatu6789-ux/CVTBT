# 🚀 HƯỚNG DẪN DEPLOY CV LÊN GITHUB PAGES

## 📋 Tổng quan

CV của bạn đã được cấu hình sẵn để deploy lên GitHub Pages với:
- ✅ **GitHub Actions** - Tự động deploy khi push code
- ✅ **Vite build** - Optimized production build
- ✅ **Quality checks** - ESLint + Prettier trước khi deploy
- ✅ **Custom domain** - Hỗ trợ custom domain

## 🎯 Các bước deploy

### **1. Tạo GitHub Repository**

```bash
# Tạo repository mới trên GitHub
# Repository name: cv-project (hoặc tên bạn muốn)
# Description: Professional CV built with React & Ant Design
# Public: ✅ (cần thiết cho GitHub Pages miễn phí)
```

### **2. Push code lên GitHub**

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/cv-project.git

# Push code lên GitHub
git add .
git commit -m "feat(cv): initial CV setup with GitHub Pages deployment"
git push -u origin main
```

### **3. Cấu hình GitHub Pages**

1. **Vào repository** trên GitHub
2. **Settings** → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `gh-pages` / `root`
5. **Save**

### **4. Cập nhật URLs (nếu cần)**

Nếu repository name khác `cv-project`, cập nhật:

```javascript
// vite.config.js
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // Thay đổi ở đây
});

// package.json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

## 🔧 Cấu hình tự động

### **GitHub Actions Workflow**

File `.github/workflows/deploy.yml` sẽ tự động:
- ✅ Install dependencies
- ✅ Run quality checks (ESLint + Prettier)
- ✅ Build CV
- ✅ Deploy lên GitHub Pages

### **Trigger deployment**

```bash
# Mỗi khi push code lên main branch
git add .
git commit -m "feat(cv): update CV content"
git push origin main
```

## 🌐 Truy cập CV

Sau khi deploy thành công:
- **URL**: `https://YOUR_USERNAME.github.io/cv-project`
- **Custom domain**: Có thể cấu hình trong GitHub Pages settings

## 📊 Build Scripts

```bash
# Build locally
npm run build

# Preview build
npm run preview

# Deploy manually (nếu cần)
npm run deploy
```

## 🎨 Customization

### **Thay đổi thông tin CV**
```bash
# Chỉnh sửa file data
src/data.json

# Commit và push
git add src/data.json
git commit -m "feat(cv): update personal information"
git push origin main
```

### **Thay đổi styling**
```bash
# Chỉnh sửa CSS variables
src/styles/variables.css

# Commit và push
git add src/styles/
git commit -m "style(cv): update color scheme"
git push origin main
```

## 🔍 Troubleshooting

### **Lỗi thường gặp:**

1. **404 Not Found**
   - Kiểm tra `base` trong `vite.config.js`
   - Đảm bảo repository name đúng

2. **Build failed**
   - Kiểm tra ESLint errors: `npm run lint:check`
   - Sửa lỗi: `npm run lint:fix`

3. **Deploy không tự động**
   - Kiểm tra GitHub Actions tab
   - Đảm bảo workflow file đúng path

### **Debug commands:**

```bash
# Kiểm tra build local
npm run build
npm run preview

# Kiểm tra quality
npm run quality

# Kiểm tra git status
git status
git log --oneline
```

## 🎯 Best Practices

### **Commit Messages:**
```bash
feat(cv): thêm section mới
fix(cv): sửa lỗi responsive
style(cv): cập nhật màu sắc
docs(cv): cập nhật README
```

### **File Structure:**
```
cv-project/
├── .github/workflows/    # GitHub Actions
├── src/
│   ├── components/       # React components
│   ├── styles/          # CSS files
│   └── data.json        # CV data
├── public/              # Static assets
└── dist/               # Build output (auto-generated)
```

## 🎉 Kết quả

Sau khi hoàn thành:
- ✅ **Professional CV** online
- ✅ **Responsive design** trên mọi device
- ✅ **Fast loading** với Vite optimization
- ✅ **SEO friendly** với proper meta tags
- ✅ **Easy updates** với GitHub Actions

---

**CV của bạn sẽ live tại: `https://YOUR_USERNAME.github.io/cv-project`** 🚀
