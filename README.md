# CV Project - Trịnh Bá Tú

Một CV hiện đại, responsive được xây dựng với React và Vite.

## 📁 Cấu trúc dự án

```
CVDEV/
├── Component/
│   ├── Allcomponent.jsx    # Component layout chính
│   ├── CV.css             # Tất cả styles cho CV
│   ├── CVHeader.jsx       # Header với ảnh và tên
│   ├── PersonalInfo.jsx   # Sidebar với thông tin liên hệ, học vấn, kỹ năng
│   └── SummaryWork.jsx    # Nội dung chính với tóm tắt về bản thân và kinh nghiệm
├── src/
│   ├── data.json          # Tất cả dữ liệu CV tách riêng khỏi components
│   ├── App.jsx            # Root App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies và scripts
└── README.md              # File này
```

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Cài đặt

1. Clone hoặc tải dự án về
2. Cài đặt dependencies:
   ```bash
   npm install
   ```

### Phát triển

Khởi động development server:

```bash
npm run dev
```

CV sẽ có sẵn tại `http://localhost:5173`

### Build

Build cho production:

```bash
npm run build
```

### Preview

Xem trước production build:

```bash
npm run preview
```

## 🎨 Tính năng

- **Responsive Design**: Hoạt động trên desktop và mobile devices
- **Semantic HTML**: Sử dụng proper HTML5 semantic elements
- **Accessibility**: Thân thiện với screen reader với proper ARIA labels
- **Data Separation**: Tất cả dữ liệu CV được lưu trong `src/data.json`
- **Modern CSS**: Sử dụng Flexbox và responsive design principles
- **Clean Code**: React components có cấu trúc tốt với props

## 📝 Tùy chỉnh

Để cập nhật nội dung CV, chỉnh sửa file `src/data.json`. File này chứa:

- Thông tin cá nhân (name, position)
- Chi tiết liên hệ
- Thông tin học vấn
- Kỹ năng (Backend, Frontend, Tools)
- Ngôn ngữ
- Tóm tắt chuyên môn
- Kinh nghiệm làm việc
- Dự án

## 🛠️ Công nghệ sử dụng

- **React 19** - UI library
- **Vite** - Build tool và dev server
- **Ant Design** - Icons
- **CSS3** - Styling với Flexbox và responsive design
- **Google Fonts** - Poppins font family

## 📱 Responsive Breakpoints

- Desktop: Default layout (2-column)
- Mobile (≤768px): Single column layout với reordered content

## 🎯 Best Practices được áp dụng

- Semantic HTML5 elements (`<header>`, `<aside>`, `<main>`, `<article>`, `<section>`)
- Proper heading hierarchy (h1, h2, h3)
- Accessible images với alt text
- External links với `target="_blank"` và `rel="noopener noreferrer"`
- Box-sizing: border-box cho consistent sizing
- CSS custom properties và modern layout techniques
