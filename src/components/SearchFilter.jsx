import React, { useState, useMemo, useEffect } from "react";
import { Input, Select, Button, Card, Space, Typography, Tag } from "antd";
import { SearchOutlined, FilterOutlined, ClearOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

/**
 * COMPONENT TÌM KIẾM VÀ LỌC - SEARCH & FILTER
 * 
 * Chức năng:
 * - Tìm kiếm text trong toàn bộ CV
 * - Lọc theo loại thông tin (skills, work, projects, etc.)
 * - Highlight kết quả tìm kiếm
 * - Reset bộ lọc
 * 
 * Props:
 * - data: Object chứa toàn bộ dữ liệu CV
 * - onFilteredData: Callback trả về dữ liệu đã lọc
 */
export default function SearchFilter({ data, onFilteredData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterSkill, setFilterSkill] = useState("all");

  // Simple test to see if component renders
  console.log("SearchFilter component is rendering");

  // Debounce search term to make typing mượt hơn
  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(id);
  }, [searchTerm]);

  // Extract all skills for skill filter
  const allSkills = useMemo(() => {
    const skills = [];
    if (data?.skills) {
      Object.values(data.skills).forEach(skillList => {
        if (Array.isArray(skillList)) {
          skillList.forEach(skill => {
            if (typeof skill === 'string') {
              skills.push(...skill.split(',').map(s => s.trim()));
            }
          });
        }
      });
    }
    return [...new Set(skills)].filter(Boolean);
  }, [data]);

  // Filter data based on search and filters
  const filteredData = useMemo(() => {
    let filtered = { ...data };

    // Text search
    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase();
      
      // Filter personal info
      if (data.personalInfo) {
        const personalInfo = { ...data.personalInfo };
        if (personalInfo.name?.toLowerCase().includes(searchLower) ||
            personalInfo.position?.toLowerCase().includes(searchLower)) {
          filtered.personalInfo = personalInfo;
        }
      }

      // Filter contact
      if (data.contact) {
        const contact = { ...data.contact };
        if (contact.phone?.includes(debouncedSearch) ||
            contact.email?.toLowerCase().includes(searchLower) ||
            contact.address?.toLowerCase().includes(searchLower)) {
          filtered.contact = contact;
        }
      }

      // Filter education
      if (data.education) {
        const education = { ...data.education };
        if (education.school?.toLowerCase().includes(searchLower) ||
            education.degree?.toLowerCase().includes(searchLower) ||
            education.major?.toLowerCase().includes(searchLower)) {
          filtered.education = education;
        }
      }

      // Filter skills
      if (data.skills) {
        const filteredSkills = {};
        Object.entries(data.skills).forEach(([group, skills]) => {
          const matchingSkills = skills.filter(skill => 
            skill.toLowerCase().includes(searchLower)
          );
          if (matchingSkills.length > 0) {
            filteredSkills[group] = matchingSkills;
          }
        });
        if (Object.keys(filteredSkills).length > 0) {
          filtered.skills = filteredSkills;
        }
      }

      // Filter work experience
      if (data.workExperience) {
        const filteredWork = data.workExperience.filter(work => 
          work.title?.toLowerCase().includes(searchLower) ||
          work.description?.toLowerCase().includes(searchLower) ||
          work.result?.toLowerCase().includes(searchLower) ||
          (work.stack && Array.isArray(work.stack) && 
           work.stack.some(s => s.toLowerCase().includes(searchLower))) ||
          (work.highlights && Array.isArray(work.highlights) &&
           work.highlights.some(h => h.toLowerCase().includes(searchLower)))
        );
        if (filteredWork.length > 0) {
          filtered.workExperience = filteredWork;
        }
      }

      // Filter projects
      if (data.projects) {
        const filteredProjects = data.projects.filter(project => 
          project.title?.toLowerCase().includes(searchLower) ||
          project.description?.toLowerCase().includes(searchLower) ||
          project.result?.toLowerCase().includes(searchLower) ||
          (project.stack && Array.isArray(project.stack) && 
           project.stack.some(s => s.toLowerCase().includes(searchLower))) ||
          (project.highlights && Array.isArray(project.highlights) &&
           project.highlights.some(h => h.toLowerCase().includes(searchLower)))
        );
        if (filteredProjects.length > 0) {
          filtered.projects = filteredProjects;
        }
      }

      // Filter summary
      if (data.summary?.toLowerCase().includes(searchLower)) {
        filtered.summary = data.summary;
      }
    }

    // Type filter
    if (filterType !== "all") {
      const typeFiltered = {};
      switch (filterType) {
        case "skills":
          typeFiltered.skills = filtered.skills;
          typeFiltered.languages = filtered.languages;
          break;
        case "experience":
          typeFiltered.workExperience = filtered.workExperience;
          break;
        case "projects":
          typeFiltered.projects = filtered.projects;
          break;
        case "education":
          typeFiltered.education = filtered.education;
          break;
        case "contact":
          typeFiltered.contact = filtered.contact;
          typeFiltered.personalInfo = filtered.personalInfo;
          break;
        default:
          return filtered;
      }
      filtered = typeFiltered;
    }

    // Skill filter
    if (filterSkill !== "all" && data.skills) {
      const skillFiltered = {};
      Object.entries(data.skills).forEach(([group, skills]) => {
        const matchingSkills = skills.filter(skill => 
          skill.toLowerCase().includes(filterSkill.toLowerCase())
        );
        if (matchingSkills.length > 0) {
          skillFiltered[group] = matchingSkills;
        }
      });
      filtered.skills = skillFiltered;
    }

    return filtered;
  }, [data, searchTerm, filterType, filterSkill]);

  // Notify parent component of filtered data
  React.useEffect(() => {
    if (onFilteredData) {
      onFilteredData(filteredData);
    }
  }, [filteredData, onFilteredData]);

  const handleReset = () => {
    setSearchTerm("");
    setFilterType("all");
    setFilterSkill("all");
  };

  const hasActiveFilters = debouncedSearch || filterType !== "all" || filterSkill !== "all";

  return (
    <Card 
      className="search-filter-card hover-lift animate-fade-in-up"
      style={{ 
        marginBottom: "var(--margin-lg)",
        borderRadius: "var(--border-radius-lg)",
        boxShadow: "var(--shadow-md)"
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <Title level={4} style={{ margin: 0, color: "var(--color-text-primary)" }}>
            🔍 Tìm kiếm & Lọc thông tin
          </Title>
          <Text type="secondary" style={{ fontSize: "12px" }}>
            Tìm kiếm và lọc dữ liệu trong CV một cách nhanh chóng
          </Text>
        </div>

        {/* SEARCH INPUT */}
        <Search
          placeholder="Nhập từ khóa để tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={setSearchTerm}
          enterButton={<SearchOutlined />}
          size="large"
          allowClear
          className="animate-fade-in-up animate-delay-1"
        />

        {/* FILTERS */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {/* TYPE FILTER */}
          <Select
            value={filterType}
            onChange={setFilterType}
            placeholder="Lọc theo loại"
            style={{ minWidth: 140 }}
            className="animate-fade-in-up animate-delay-2"
          >
            <Option value="all">Tất cả</Option>
            <Option value="skills">Kỹ năng</Option>
            <Option value="experience">Kinh nghiệm</Option>
            <Option value="projects">Dự án</Option>
            <Option value="education">Học vấn</Option>
            <Option value="contact">Liên hệ</Option>
          </Select>

          {/* SKILL FILTER */}
          <Select
            value={filterSkill}
            onChange={setFilterSkill}
            placeholder="Lọc theo kỹ năng"
            style={{ minWidth: 160 }}
            showSearch
            allowClear
            className="animate-fade-in-up animate-delay-3"
          >
            <Option value="all">Tất cả kỹ năng</Option>
            {allSkills.map(skill => (
              <Option key={skill} value={skill}>
                {skill}
              </Option>
            ))}
          </Select>

          {/* RESET BUTTON */}
          <Button
            type="default"
            icon={<ClearOutlined />}
            onClick={handleReset}
            disabled={!hasActiveFilters}
            className="animate-fade-in-up animate-delay-4"
          >
            Reset
          </Button>
        </div>

        {/* ACTIVE FILTERS DISPLAY */}
        {hasActiveFilters && (
          <div className="animate-fade-in-up animate-delay-5">
            <Text strong style={{ fontSize: "12px", color: "var(--color-text-primary)" }}>
              Bộ lọc đang áp dụng:
            </Text>
            <div style={{ marginTop: "4px" }}>
              {debouncedSearch && (
                <Tag color="blue" style={{ margin: "2px" }}>
                  Tìm kiếm: "{debouncedSearch}"
                </Tag>
              )}
              {filterType !== "all" && (
                <Tag color="green" style={{ margin: "2px" }}>
                  Loại: {filterType}
                </Tag>
              )}
              {filterSkill !== "all" && (
                <Tag color="orange" style={{ margin: "2px" }}>
                  Kỹ năng: {filterSkill}
                </Tag>
              )}
            </div>
          </div>
        )}

        {/* RESULTS COUNT */}
        <div style={{ textAlign: "center" }}>
          <Text type="secondary" style={{ fontSize: "11px" }}>
            {hasActiveFilters 
              ? `Hiển thị ${Object.keys(filteredData).length} mục phù hợp`
              : "Hiển thị tất cả thông tin"
            }
          </Text>
        </div>
      </Space>
    </Card>
  );
}


