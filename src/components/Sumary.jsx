import React from "react";
import { Card, Divider, List, Space, Tag, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

const Section = ({ title, children }) => (
  <div
    style={{
      marginBottom: 25,
      background: "#fafbfc",
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #e8f0fe",
      boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    }}
  >
    <Title
      level={3}
      style={{
        margin: "0 0 15px 0",
        color: "#2c3e50",
        fontSize: "18px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        borderBottom: "3px solid #3498db",
        paddingBottom: "8px",
      }}
    >
      {title}
    </Title>
    <div>{children}</div>
  </div>
);

export default function Sumary({ data }) {
  const summary = data?.summary || "";
  const works = data?.workExperience || [];
  const projects = data?.projects || [];

  return (
    <div style={{ width: "100%" }}>
      <Section title="SUMMARY">
        <Paragraph
          style={{
            marginBottom: 0,
            fontSize: "12px",
            lineHeight: "1.5",
            color: "#34495e",
          }}
        >
          {summary}
        </Paragraph>
      </Section>

      <Section title="WORK">
        <div>
          {works.map((w, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: 18,
                paddingBottom: 15,
                borderBottom:
                  idx < works.length - 1 ? "1px solid #e8e8e8" : "none",
              }}
            >
              {/* Job Title và Period */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#2c3e50",
                  }}
                >
                  {w.title}
                </Text>
                {w.period && (
                  <Text
                    style={{
                      color: "#666",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {w.period}
                  </Text>
                )}
              </div>

              {/* Description */}
              {w.description && (
                <Paragraph
                  style={{
                    marginBottom: 8,
                    fontSize: "11px",
                    color: "#34495e",
                    lineHeight: "1.4",
                  }}
                >
                  {w.description}
                </Paragraph>
              )}

              {/* Stack */}
              {w.stack && (
                <div style={{ marginBottom: 8, fontSize: "11px" }}>
                  <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                    Stack:
                  </Text>{" "}
                  <Text style={{ color: "#34495e" }}>
                    {Array.isArray(w.stack) ? w.stack.join(", ") : w.stack}
                  </Text>
                </div>
              )}

              {/* Highlights */}
              {Array.isArray(w.highlights) && w.highlights.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  {w.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#34495e",
                        marginBottom: 3,
                        lineHeight: "1.3",
                      }}
                    >
                      • {highlight}
                    </div>
                  ))}
                </div>
              )}

              {/* Role */}
              {w.role && (
                <div style={{ marginBottom: 6, fontSize: "11px" }}>
                  <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                    Role:
                  </Text>{" "}
                  <Tag style={{ fontSize: "10px" }}>{w.role}</Tag>
                </div>
              )}

              {/* Result */}
              {w.result && (
                <div style={{ fontSize: "11px" }}>
                  <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                    Result:
                  </Text>{" "}
                  <Text style={{ color: "#34495e" }}>{w.result}</Text>
                  {w.resultLink && (
                    <a
                      href={w.resultLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#1890ff",
                        marginLeft: 6,
                        textDecoration: "underline",
                      }}
                    >
                      (View)
                    </a>
                  )}
                </div>
              )}

              {/* Links */}
              {Array.isArray(w.links) && w.links.length > 0 && (
                <div style={{ marginTop: 6, fontSize: "11px" }}>
                  {w.links.map((link, i) => (
                    <div key={i} style={{ marginBottom: 2 }}>
                      <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                        {link.type} -
                      </Text>{" "}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#1890ff",
                          textDecoration: "underline",
                        }}
                      >
                        {link.display || link.url}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="PROJECT">
        <div>
          {projects.map((p, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: 18,
                paddingBottom: 15,
                borderBottom:
                  idx < projects.length - 1 ? "1px solid #e8e8e8" : "none",
              }}
            >
              {/* Project Title và Period */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#2c3e50",
                  }}
                >
                  {p.title}
                </Text>
                {p.period && (
                  <Text
                    style={{
                      color: "#666",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {p.period}
                  </Text>
                )}
              </div>

              {/* Description */}
              {p.description && (
                <Paragraph
                  style={{
                    marginBottom: 8,
                    fontSize: "11px",
                    color: "#34495e",
                    lineHeight: "1.4",
                  }}
                >
                  {p.description}
                </Paragraph>
              )}

              {/* Stack */}
              {p.stack && (
                <div style={{ marginBottom: 8, fontSize: "11px" }}>
                  <Text
                    style={{
                      fontWeight: 600,
                      color: "#2c3e50",
                      fontSize: "11px",
                    }}
                  >
                    Stack:
                  </Text>{" "}
                  <Text style={{ color: "#34495e", fontSize: "11px" }}>
                    {Array.isArray(p.stack) ? p.stack.join(", ") : p.stack}
                  </Text>
                </div>
              )}

              {/* Highlights */}
              {Array.isArray(p.highlights) && p.highlights.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  {p.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: "11px",
                        color: "#34495e",
                        marginBottom: 3,
                        lineHeight: "1.3",
                      }}
                    >
                      • {highlight}
                    </div>
                  ))}
                </div>
              )}

              {/* Role */}
              {p.role && (
                <div style={{ marginBottom: 6, fontSize: "11px" }}>
                  <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                    Role:
                  </Text>{" "}
                  <Tag style={{ fontSize: "10px" }}>{p.role}</Tag>
                </div>
              )}

              {/* Result */}
              {p.result && (
                <div style={{ marginBottom: 6, fontSize: "11px" }}>
                  <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                    Result:
                  </Text>{" "}
                  <Text style={{ color: "#34495e" }}>{p.result}</Text>
                </div>
              )}

              {/* Links */}
              {Array.isArray(p.links) && p.links.length > 0 && (
                <div style={{ fontSize: "11px" }}>
                  {p.links.map((link, i) => (
                    <div key={i} style={{ marginBottom: 2 }}>
                      <Text style={{ fontWeight: 600, color: "#2c3e50" }}>
                        {link.type} -
                      </Text>{" "}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#1890ff",
                          textDecoration: "underline",
                        }}
                      >
                        {link.display || link.url}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
