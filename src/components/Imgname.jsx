import React from "react";
import { Avatar, Typography } from "antd";
const { Title, Text } = Typography;

/**
 * COMPONENT HIỂN THỊ THÔNG TIN CÁ NHÂN
 * - Avatar, tên, chức vụ
 */
export default function Imgname({ data }) {
  const name = data?.personalInfo?.name;
  const position = data?.personalInfo?.position;
  const avatarUrl = data?.personalInfo?.avatarUrl;

  return (
    <div className="flex-center gap-xl hover-scale">
      <Avatar
        src={avatarUrl}
        size={160}
        className="avatar"
        style={{
          border: '4px solid #ffffff',
          boxShadow: '0 6px 20px rgba(24, 144, 255, 0.25)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.04)';
          e.currentTarget.style.boxShadow = '0 10px 28px rgba(24, 144, 255, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(24, 144, 255, 0.25)';
        }}
      >
        {!avatarUrl && (name?.[0] || "A")}
      </Avatar>

      <div className="flex-1">
        <Title level={1} className="name-display" style={{ marginBottom: 4 }}>
          {name}
        </Title>
        <Text className="position-display">
          {position}
        </Text>
      </div>
    </div>
  );
}