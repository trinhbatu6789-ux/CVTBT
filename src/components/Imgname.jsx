import React from "react";
import { Avatar, Space, Typography } from "antd";
const { Title, Text } = Typography;

export default function Imgname({ data }) {
  const name = data?.personalInfo?.name;
  const position = data?.personalInfo?.position;
  const avatarUrl = data?.personalInfo?.avatarUrl;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
      {/* Avatar - tròn, lớn, nổi bật */}
      <Avatar
        src={avatarUrl}
        size={130}
        style={{
          background: "#d9d9d9",
          border: "5px solid white",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
        }}
      >
        {!avatarUrl && (name?.[0] || "A")}
      </Avatar>

      {/* Thông tin tên và chức vụ */}
      <div style={{ flex: 1 }}>
        <Title
          level={1}
          style={{
            margin: 0,
            fontSize: "36px",
            fontWeight: "bold",
            color: "#2c3e50",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
          }}
        >
          {name}
        </Title>
        <Text
          style={{
            fontSize: "18px",
            color: "#34495e",
            fontWeight: "600",
            marginTop: "8px",
            display: "block",
            letterSpacing: "0.3px",
          }}
        >
          {position}
        </Text>
      </div>
    </div>
  );
}
