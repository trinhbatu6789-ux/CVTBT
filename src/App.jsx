import { ConfigProvider, theme } from "antd";
import Allgeneral from "./components/allgeneral";
import "antd/dist/reset.css";

/**
 * APP COMPONENT - COMPONENT GỐC
 *
 * Chức năng:
 * - Cấu hình Ant Design theme
 * - Thiết lập layout tổng thể cho ứng dụng
 * - Wrap toàn bộ CV component
 *
 * Theme Configuration:
 * - Sử dụng CSS variables cho consistency
 * - Hỗ trợ dark mode (sẵn sàng)
 * - Tùy chỉnh component styling
 */
export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm, // Có thể chuyển sang theme.darkAlgorithm
        token: {
          colorPrimary: "var(--color-primary)",
          colorInfo: "var(--color-info)",
          colorBgLayout: "var(--color-bg-layout)",
          borderRadius: 12,
          fontSize: 14,
        },
        components: {
          Card: { borderRadiusLG: 16 },
          Typography: { titleMarginBottom: 0 },
        },
      }}
    >
      {/* WRAPPER TOÀN BỘ APP */}
      <div className="app-wrapper">
        <Allgeneral />
      </div>
    </ConfigProvider>
  );
}
