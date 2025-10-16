# CV - Trịnh Bá Tú

> CV web hiện đại xây bằng React + Vite, dữ liệu tách riêng, có tìm kiếm và hiệu ứng UI.

## 📦 Tech stack
- React 19 + Vite 7
- Ant Design (UI cơ bản, icons)
- CSS tách lớp: `styles/layout.css`, `styles/components.css`, `styles/animations.css`

## 🧭 Cấu trúc chính
```
src/
├─ components/
│  ├─ Allgeneral.jsx          # Khung CV, có nút icon mở Search Drawer
│  ├─ Imgname.jsx             # Avatar + tên + vị trí (viền trắng)
│  ├─ Personalinformation.jsx # Sidebar: Contact, Education, Skills, Languages
│  ├─ Sumary.jsx              # Main: Summary, Work, Project
│  ├─ SearchFilter.jsx        # Form Tìm kiếm & Lọc (dùng trong Drawer)
│  └─ SimpleSearch.jsx        # Demo tìm kiếm đơn giản
├─ data.json                  # Toàn bộ nội dung CV
├─ App.jsx                    # Root + cấu hình theme Ant Design
├─ main.jsx                   # Entry Vite
└─ index.css                  # Global CSS
```

## 🚀 Chạy dự án

1) Cài đặt
```bash
npm install
```
2) Dev server
```bash
npm run dev
```
Mặc định: http://localhost:5173

3) Build + Preview
```bash
npm run build
npm run preview
```

## ✨ Tính năng
- Nút icon tìm kiếm góc phải mở/đóng Search Drawer
- Tìm kiếm mượt với debounce 300ms, lọc theo loại và kỹ năng
- Hiệu ứng UI: hover chữ/khối, “lift” card, avatar viền trắng
- Responsive: 2 cột → 1 cột ở ≤768px

## 📝 Tùy chỉnh nội dung
Chỉnh `src/data.json`:
- `personalInfo`, `contact`, `education`, `skills`, `languages`
- `summary`, `workExperience[]`, `projects[]`

## 🔍 Ghi chú Search
- `Allgeneral.jsx`: chứa `FloatButton` + `Drawer` để bật/tắt `SearchFilter`.
- `SearchFilter.jsx`: xử lý filter, trả dữ liệu đã lọc qua `onFilteredData`.

## 🧹 Chất lượng mã
- ESLint + Prettier + Husky. Nếu cần đẩy nhanh: `git commit --no-verify`.
- Chú ý import đúng PascalCase theo tên file thực tế.

## 📄 License
Sử dụng cho mục đích học tập và portfolio cá nhân.
