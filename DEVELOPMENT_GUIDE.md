# 🚀 HƯỚNG DẪN PHÁT TRIỂN - DEVELOPMENT GUIDE

## 📋 Tổng quan

Dự án CV đã được tích hợp đầy đủ các công cụ code quality:

- ✅ **ESLint** - Kiểm tra lỗi code
- ✅ **Prettier** - Format code
- ✅ **Commitlint** - Kiểm tra commit message
- ✅ **Husky** - Git hooks
- ✅ **Lint-staged** - Lint staged files

## 🛠️ Cài đặt

```bash
# Cài đặt dependencies
npm install

# Khởi tạo Husky hooks
npm run prepare
```

## 📝 Quy trình làm việc

### 1. **Development**

```bash
# Chạy dev server
npm run dev

# Kiểm tra code quality
npm run quality

# Tự động sửa lỗi
npm run quality:fix
```

### 2. **Commit Code**

```bash
# Cách 1: Sử dụng commitizen (khuyến nghị)
npm run commit

# Cách 2: Commit thủ công
git add .
git commit -m "feat(ui): thêm dark mode cho cv"
```

### 3. **Kiểm tra trước khi commit**

```bash
# Kiểm tra lint-staged
npm run pre-commit:check

# Kiểm tra commit message
npm run commit:check
```

## 🎯 Scripts có sẵn

### **Development**

- `npm run dev` - Chạy dev server
- `npm run build` - Build production
- `npm run preview` - Preview build

### **Code Quality**

- `npm run lint` - Kiểm tra lỗi ESLint
- `npm run lint:fix` - Tự động sửa lỗi ESLint
- `npm run lint:check` - Kiểm tra lỗi (không sửa)
- `npm run format` - Format code với Prettier
- `npm run format:check` - Kiểm tra format
- `npm run quality` - Kiểm tra tất cả (lint + format)
- `npm run quality:fix` - Tự động sửa tất cả

### **Commit**

- `npm run commit` - Interactive commit với commitizen
- `npm run commit:check` - Kiểm tra commit message

### **Git Hooks**

- `npm run pre-commit` - Chạy lint-staged
- `npm run pre-commit:check` - Kiểm tra lint-staged (dry-run)

## 📋 Quy tắc Commit Message

### **Format chuẩn:**

```
<type>(<scope>): <description>
```

### **Types:**

- `feat` - Tính năng mới
- `fix` - Sửa lỗi
- `docs` - Cập nhật tài liệu
- `style` - Thay đổi formatting
- `refactor` - Refactor code
- `test` - Thêm/sửa tests
- `chore` - Cập nhật build tools

### **Scopes:**

- `ui` - Giao diện người dùng
- `ux` - Trải nghiệm người dùng
- `css` - Styling CSS
- `component` - React components
- `layout` - Layout structure
- `config` - Configuration files

### **Ví dụ:**

```bash
# ✅ ĐÚNG
feat(ui): thêm dark mode cho cv
fix(css): sửa lỗi responsive trên mobile
docs(readme): cập nhật hướng dẫn cài đặt
refactor(component): tách component thành modules nhỏ
style(code): format code theo eslint rules

# ❌ SAI
"sửa lỗi" (thiếu type)
"feat: add dark mode" (không có scope)
"fix: bug" (quá ngắn)
"feat(UI): Add Dark Mode Feature!!!" (viết hoa, có dấu chấm than)
```

## 🔧 Cấu hình

### **ESLint** (`.eslintrc.cjs`)

- React rules
- JavaScript best practices
- Custom rules cho dự án

### **Prettier** (`.prettierrc`)

- Single quotes
- 2 spaces indent
- 100 chars line length
- Semicolons

### **Commitlint** (`commitlint.config.js`)

- Conventional commits
- Vietnamese examples
- Custom rules

### **Lint-staged** (`lint-staged.config.js`)

- ESLint + Prettier trên staged files
- Auto-fix và add lại files

## 🚨 Troubleshooting

### **Lỗi ESLint:**

```bash
# Tự động sửa
npm run lint:fix

# Kiểm tra lỗi cụ thể
npx eslint src/components/Allgeneral.jsx
```

### **Lỗi Prettier:**

```bash
# Format tất cả files
npm run format

# Kiểm tra format
npm run format:check
```

### **Lỗi Commit Message:**

```bash
# Kiểm tra commit message
npm run commit:check

# Sử dụng commitizen
npm run commit
```

### **Lỗi Husky:**

```bash
# Reinstall husky
npm run prepare

# Chạy hooks thủ công
.husky/pre-commit
.husky/commit-msg
```

## 📚 Best Practices

### **Code Style:**

1. Sử dụng functional components
2. Destructuring props
3. Consistent naming (camelCase)
4. Comments tiếng Việt
5. JSDoc cho functions

### **Git Workflow:**

1. Feature branches
2. Meaningful commit messages
3. Pull requests với reviews
4. Squash commits trước khi merge

### **File Organization:**

```
src/
├── components/     # React components
├── styles/         # CSS files
├── data/          # Data files
└── utils/         # Utility functions
```

## 🎯 Tips & Tricks

### **VS Code Extensions:**

- ESLint
- Prettier
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### **VS Code Settings:**

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"]
}
```

### **Git Aliases:**

```bash
# Thêm vào .gitconfig
[alias]
  cm = commit -m
  ca = commit --amend
  co = checkout
  br = branch
  st = status
```

## 📞 Hỗ trợ

Nếu gặp vấn đề:

1. Kiểm tra logs
2. Chạy `npm run quality:fix`
3. Xem documentation của từng tool
4. Tạo issue với thông tin chi tiết

---

**Happy Coding! 🚀**
