# 🚀 GitHub Actions Workflows

## 📋 Tổng quan

Dự án CV sử dụng GitHub Actions để tự động hóa:
- ✅ **Code Quality Checks** - Kiểm tra chất lượng code
- ✅ **Build & Test** - Build và test tự động
- ✅ **Deploy** - Deploy lên GitHub Pages
- ✅ **PR Checks** - Kiểm tra Pull Request

## 🔧 Workflows có sẵn

### 1. **CI/CD Pipeline** (`ci-cd.yml`)
- **Trigger**: Push to main/develop, Pull Request
- **Jobs**:
  - 🔍 Code Quality Check
  - 🏗️ Build Project
  - 🧪 Run Tests
  - 🚀 Deploy to GitHub Pages
  - 📢 Notify Results

### 2. **Deploy Workflow** (`deploy.yml`)
- **Trigger**: Push to main, Release, Manual
- **Jobs**:
  - 🌐 Deploy to GitHub Pages
  - ⚡ Deploy to Vercel (optional)
  - 🏷️ Create Release
  - 📊 Deployment Summary

### 3. **PR Check** (`pr-check.yml`)
- **Trigger**: Pull Request
- **Jobs**:
  - 🔍 Code Quality
  - 🏗️ Build Verification
  - 👁️ Preview Deployment
  - 📋 PR Summary

## 🎯 Cách sử dụng

### **Automatic Triggers**
- **Push to main**: Tự động build và deploy
- **Pull Request**: Tự động kiểm tra quality và build
- **Release**: Tạo release archive

### **Manual Triggers**
```bash
# Trigger CI/CD manually
gh workflow run ci-cd.yml

# Trigger deploy manually
gh workflow run deploy.yml

# Trigger PR check manually
gh workflow run pr-check.yml
```

## 🔧 Environment Variables

### **Required Secrets**
```yaml
# GitHub Pages (auto-configured)
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

# Vercel (optional)
VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

### **Setup Secrets**
1. Go to Repository Settings
2. Click "Secrets and variables" → "Actions"
3. Add required secrets

## 📊 Workflow Status

### **Success Indicators**
- ✅ All jobs completed successfully
- 🎉 CV deployed to GitHub Pages
- 📊 Build artifacts uploaded
- 📢 Notifications sent

### **Failure Indicators**
- ❌ Code quality issues
- 🏗️ Build failures
- 🚀 Deployment errors
- 📋 Missing dependencies

## 🔍 Debugging

### **Common Issues**
1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Deployment Failures**
   - Verify GitHub Pages settings
   - Check repository permissions
   - Ensure build artifacts exist

3. **Quality Check Failures**
   - Fix ESLint errors: `npm run lint:fix`
   - Fix Prettier issues: `npm run format`
   - Check commit message format

### **Logs Location**
- **Actions Tab**: Repository → Actions
- **Workflow Runs**: Click on specific run
- **Job Logs**: Click on failed job
- **Step Details**: Expand individual steps

## 🎯 Best Practices

### **For Developers**
1. **Always run quality checks locally**:
   ```bash
   npm run quality:fix
   ```

2. **Test build locally**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Use conventional commits**:
   ```bash
   npm run commit
   ```

### **For Maintainers**
1. **Monitor workflow runs** regularly
2. **Review PR checks** before merging
3. **Keep dependencies updated**
4. **Monitor deployment status**

## 📈 Performance

### **Build Times**
- **Quality Check**: ~2-3 minutes
- **Build**: ~1-2 minutes
- **Deploy**: ~1-2 minutes
- **Total**: ~5-7 minutes

### **Optimization Tips**
- Use `npm ci` for faster installs
- Cache node_modules
- Parallel job execution
- Only run on changed files

## 🔄 Maintenance

### **Regular Tasks**
- Update Node.js version
- Update action versions
- Review and update dependencies
- Monitor workflow performance

### **Version Updates**
```yaml
# Update action versions regularly
- uses: actions/checkout@v4  # Latest version
- uses: actions/setup-node@v4  # Latest version
```

---

## 📞 Support

Nếu gặp vấn đề với workflows:
1. Check workflow logs
2. Review error messages
3. Verify environment setup
4. Create issue with details

**Happy Deploying! 🚀**
