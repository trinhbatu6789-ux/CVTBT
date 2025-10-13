import React from 'react';
import { Card, Descriptions, Divider, Space, Tag, Typography } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

const Section = ({ title, children }) => (
  <div
    style={{
      marginBottom: 20,
      background: 'rgba(255,255,255,0.8)',
      padding: '18px',
      borderRadius: '10px',
      border: '1px solid rgba(230,243,255,0.6)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}
  >
    <Title
      level={4}
      style={{
        margin: '0 0 10px 0',
        color: '#2c3e50',
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '6px',
      }}
    >
      {title}
    </Title>
    <div style={{ marginLeft: 0 }}>{children}</div>
  </div>
);

export default function Personalinformation({ data }) {
  const contact = data?.contact || {};
  const skills = data?.skills || {};
  const languages = data?.languages || [];
  const edu = data?.education || {};

  return (
    <div style={{ width: '100%' }}>
      {/* CONTACT - với icons */}
      <Section title='CONTACT'>
        <div style={{ marginBottom: 12 }}>
          <div style={{ marginBottom: 5, display: 'flex', alignItems: 'flex-start', gap: 6 }}>
            <PhoneOutlined style={{ color: '#2c3e50', fontSize: '12px', marginTop: 2 }} />
            <span style={{ color: '#34495e', fontSize: '12px', flex: 1 }}>{contact.phone}</span>
          </div>
          <div style={{ marginBottom: 5, display: 'flex', alignItems: 'flex-start', gap: 6 }}>
            <MailOutlined style={{ color: '#2c3e50', fontSize: '12px', marginTop: 2 }} />
            <span style={{ color: '#34495e', fontSize: '12px', flex: 1 }}>{contact.email}</span>
          </div>
          <div style={{ marginBottom: 5, display: 'flex', alignItems: 'flex-start', gap: 6 }}>
            <EnvironmentOutlined style={{ color: '#2c3e50', fontSize: '12px', marginTop: 2 }} />
            <span style={{ color: '#34495e', fontSize: '12px', flex: 1 }}>{contact.address}</span>
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section title='EDUCATION'>
        <div>
          {edu.school && (
            <div style={{ fontSize: '11px', color: '#34495e', marginBottom: 2 }}>{edu.school}</div>
          )}
          {edu.degree && (
            <div style={{ fontSize: '11px', color: '#34495e', fontWeight: 600, marginBottom: 2 }}>
              {edu.degree}
            </div>
          )}
          {edu.major && (
            <div style={{ fontSize: '11px', color: '#34495e', marginBottom: 2 }}>
              Major: {edu.major}
            </div>
          )}
          {edu.gpa && <div style={{ fontSize: '11px', color: '#34495e' }}>GPA: {edu.gpa}</div>}
        </div>
      </Section>

      {/* SKILLS - nhóm động */}
      <Section title='SKILLS'>
        <div>
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} style={{ marginBottom: 12 }}>
              <Text
                style={{
                  color: '#2c3e50',
                  fontWeight: 600,
                  fontSize: '12px',
                  display: 'block',
                  marginBottom: 4,
                }}
              >
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </Text>
              <div style={{ marginLeft: 0 }}>
                {(list || []).map(s => (
                  <div
                    key={`${group}-${s}`}
                    style={{
                      marginBottom: 2,
                      fontSize: '11px',
                      color: '#34495e',
                    }}
                  >
                    • {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* LANGUAGE */}
      <Section title='LANGUAGE'>
        <div>
          {languages.map(l => (
            <div
              key={l.name}
              style={{
                marginBottom: 3,
                fontSize: '11px',
                color: '#34495e',
              }}
            >
              <Text style={{ fontWeight: 600, color: '#2c3e50' }}>{l.name}</Text>: {l.level}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
