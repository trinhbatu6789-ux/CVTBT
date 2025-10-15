# 🎨 HỆ THỐNG THIẾT KẾ CV - DESIGN SYSTEM

## 📁 Cấu trúc Files

```
src/styles/
├── variables.css    # Biến thiết kế (colors, spacing, typography)
├── layout.css       # Bố cục tổng thể và responsive
├── components.css   # Styling cho các component UI
└── README.md        # Tài liệu hướng dẫn
```

## 🎯 Mục đích

- **Tách biệt UX/UI**: Tách logic component và styling
- **Dễ quản lý**: Comments tiếng Việt, cấu trúc rõ ràng
- **Dễ scale**: CSS variables, component-based styling
- **Consistency**: Design system nhất quán

## 🔧 Cách sử dụng

### 1. CSS Variables (variables.css)

```css
/* Sử dụng biến thiết kế */
.my-component {
  color: var(--color-text-primary);
  padding: var(--padding-lg);
  border-radius: var(--border-radius-lg);
}
```

### 2. Layout Classes (layout.css)

```jsx
// Sử dụng utility classes
<div className="flex-center gap-lg">
  <div className="cv-container">
    <div className="cv-header">...</div>
  </div>
</div>
```

### 3. Component Classes (components.css)

```jsx
// Sử dụng component-specific classes
<div className="section">
  <h3 className="section-title">Tiêu đề</h3>
  <div className="contact-item">
    <Icon className="contact-icon" />
    <span className="contact-text">Nội dung</span>
  </div>
</div>
```

## 📋 Danh sách Classes

### Layout Classes

- `.cv-container` - Container chính của CV
- `.cv-header` - Header section
- `.cv-main-content` - Layout 2 cột
- `.cv-sidebar` - Cột trái
- `.cv-main` - Cột phải
- `.app-wrapper` - Wrapper toàn app

### Utility Classes

- `.flex`, `.flex-center`, `.flex-between` - Flexbox utilities
- `.gap-sm`, `.gap-md`, `.gap-lg` - Spacing utilities
- `.w-full`, `.w-auto` - Width utilities
- `.mb-*`, `.mt-*` - Margin utilities

### Component Classes

- `.section` - Container cho sections
- `.section-title` - Tiêu đề section lớn
- `.section-title-small` - Tiêu đề section nhỏ
- `.contact-item` - Item liên hệ
- `.work-item` - Item công việc
- `.project-item` - Item dự án
- `.skill-group` - Nhóm kỹ năng
- `.highlight-item` - Điểm nổi bật

## 🎨 Design Tokens

### Colors

- `--color-primary`: #6366f1 (Màu chủ đạo)
- `--color-text-primary`: #2c3e50 (Text chính)
- `--color-text-secondary`: #34495e (Text phụ)
- `--color-bg-section`: #fafbfc (Nền section)

### Spacing

- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 12px
- `--spacing-lg`: 16px
- `--spacing-xl`: 20px
- `--spacing-xxl`: 24px

### Typography

- `--font-size-sm`: 11px
- `--font-size-md`: 12px
- `--font-size-lg`: 14px
- `--font-size-xxl`: 18px
- `--font-size-giant`: 36px

## 🔄 Quy trình làm việc

1. **Thêm component mới**: Tạo classes trong `components.css`
2. **Thêm biến mới**: Định nghĩa trong `variables.css`
3. **Layout mới**: Thêm vào `layout.css`
4. **Comments**: Luôn comment tiếng Việt

## 📱 Responsive Design

```css
/* Mobile first approach */
@media (max-width: 768px) {
  .cv-main-content {
    flex-direction: column;
  }
}
```

## 🎯 Best Practices

1. **Sử dụng CSS variables** thay vì hard-code values
2. **Component-based styling** - mỗi component có classes riêng
3. **Utility classes** cho spacing và layout
4. **Comments tiếng Việt** cho dễ hiểu
5. **Consistent naming** - theo convention rõ ràng
