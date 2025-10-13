import React from 'react';
import { Col, Row } from 'antd';
import Imgname from './imgname';
import Personalinformation from './personalinformation';
import Sumary from './sumary';
import data from '../data.json';

export default function Allgeneral() {
  return (
    <div
      style={{
        maxWidth: '210mm',
        width: '100%',
        margin: '0 auto',
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        minHeight: '297mm',
      }}
    >
      {/* Header Section - Full width với background xanh nhạt */}
      <div
        style={{
          background: 'linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 100%)',
          padding: '35px 40px',
          position: 'relative',
          borderBottom: '3px solid #d1e7ff',
        }}
      >
        <Imgname data={data} />
      </div>

      {/* Main Content - 2 cột */}
      <Row gutter={0}>
        <Col xs={24} md={7}>
          <div
            style={{
              background: 'linear-gradient(180deg, #e6f3ff 0%, #f0f8ff 100%)',
              minHeight: 'calc(297mm - 140px)',
              padding: '25px 20px',
              borderRight: '2px solid #d1e7ff',
            }}
          >
            <Personalinformation data={data} />
          </div>
        </Col>
        <Col xs={24} md={17}>
          <div
            style={{
              background: 'white',
              padding: '25px 30px',
              minHeight: 'calc(297mm - 140px)',
            }}
          >
            <Sumary data={data} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
