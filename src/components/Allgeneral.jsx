import React, { useState } from "react";
import { Drawer, FloatButton } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Imgname from "./Imgname";
import Personalinformation from "./Personalinformation";
import Sumary from "./Sumary";
import SearchFilter from "./SearchFilter";
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
  const [filteredData, setFilteredData] = useState(data);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="cv-container animate-fade-in-up">
      {/* SEARCH TOGGLER - NÚT ICON GÓC PHẢI */}
      <FloatButton
        icon={<SearchOutlined />}
        tooltip={"Tìm kiếm"}
        type="primary"
        style={{ right: 24, top: 24 }}
        onClick={() => setIsSearchOpen(true)}
      />

      {/* SEARCH DRAWER - FORM HIỂN THỊ KHI NHẤN ICON */}
      <Drawer
        title="🔍 Tìm kiếm & Lọc thông tin"
        placement="right"
        width={420}
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        destroyOnClose
      >
        <SearchFilter 
          data={data} 
          onFilteredData={setFilteredData}
        />
      </Drawer>

      {/* HEADER SECTION - PHẦN ĐẦU CV VỚI THÔNG TIN CÁ NHÂN */}
      <div className="cv-header animate-slide-in-top">
        <Imgname data={filteredData} />
      </div>

      {/* MAIN CONTENT - NỘI DUNG CHÍNH 2 CỘT */}
      <div className="cv-main-content">
        {/* SIDEBAR - CỘT TRÁI: THÔNG TIN BỔ TRỢ */}
        <div className="cv-sidebar animate-fade-in-left animate-delay-2">
          <Personalinformation data={filteredData} />
        </div>

        {/* MAIN CONTENT - CỘT PHẢI: NỘI DUNG CHÍNH */}
        <div className="cv-main animate-fade-in-right animate-delay-3">
          <Sumary data={filteredData} />
        </div>
      </div>
    </div>
  );
}
