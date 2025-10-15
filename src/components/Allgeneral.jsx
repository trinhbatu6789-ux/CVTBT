import React from "react";
import { Row, Col } from "antd";
import Imgname from "./imgname";
import Personalinformation from "./personalinformation";
import Sumary from "./sumary";
import data from "../data.json";

/**
 * COMPONENT CHÍNH - TỔNG QUAN CV
 *
 * Chức năng:
 * - Tạo layout tổng thể cho CV
 * - Quản lý cấu trúc 2 cột (sidebar + main content)
 * - Hiển thị header với thông tin cá nhân
 *
 * Cấu trúc:
 * - Header: Chứa avatar và thông tin cơ bản
 * - Sidebar: Thông tin liên hệ, kỹ năng, học vấn
 * - Main: Tóm tắt, kinh nghiệm, dự án
 */
export default function Allgeneral() {
  return (
    <div className="cv-container">
      {/* HEADER SECTION - PHẦN ĐẦU CV VỚI THÔNG TIN CÁ NHÂN */}
      <div className="cv-header">
        <Imgname data={data} />
      </div>

      {/* MAIN CONTENT - NỘI DUNG CHÍNH 2 CỘT */}
      <div className="cv-main-content">
        {/* SIDEBAR - CỘT TRÁI: THÔNG TIN BỔ TRỢ */}
        <div className="cv-sidebar">
          <Personalinformation data={data} />
        </div>

        {/* MAIN CONTENT - CỘT PHẢI: NỘI DUNG CHÍNH */}
        <div className="cv-main">
          <Sumary data={data} />
        </div>
      </div>
    </div>
  );
}
