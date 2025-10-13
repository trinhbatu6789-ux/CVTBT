/**
 * COMMITLINT CONFIGURATION - CẤU HÌNH COMMITLINT
 * 
 * Quy tắc commit message theo Conventional Commits
 * Format: <type>(<scope>): <description>
 * 
 * Types:
 * - feat: Tính năng mới
 * - fix: Sửa lỗi
 * - docs: Cập nhật tài liệu
 * - style: Thay đổi formatting, không ảnh hưởng logic
 * - refactor: Refactor code
 * - test: Thêm/sửa tests
 * - chore: Cập nhật build tools, dependencies
 */

export default {
  extends: ['@commitlint/config-conventional'],
  
  rules: {
    // TYPE RULES - QUY TẮC LOẠI COMMIT
    'type-enum': [
      2,
      'always',
      [
        'feat',     // ✨ Tính năng mới
        'fix',      // 🐛 Sửa lỗi
        'docs',     // 📚 Cập nhật tài liệu
        'style',    // 💄 Thay đổi formatting
        'refactor', // ♻️ Refactor code
        'test',     // ✅ Thêm/sửa tests
        'chore',    // 🔧 Cập nhật build tools
        'perf',     // ⚡ Cải thiện performance
        'ci',       // 👷 Cập nhật CI/CD
        'build',    // 📦 Cập nhật build system
        'revert',   // ⏪ Revert commit
      ]
    ],
    
    // CASE RULES - QUY TẮC CHỮ HOA/THƯỜNG
    'type-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    
    // LENGTH RULES - QUY TẮC ĐỘ DÀI
    'type-max-length': [2, 'always', 10],
    'scope-max-length': [2, 'always', 20],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 10],
    
    // FORMAT RULES - QUY TẮC FORMAT
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    
    // SCOPE RULES - QUY TẮC SCOPE
    'scope-enum': [
      2,
      'always',
      [
        'ui',           // Giao diện người dùng
        'ux',           // Trải nghiệm người dùng
        'css',          // Styling CSS
        'component',    // React components
        'layout',       // Layout structure
        'config',       // Configuration files
        'deps',         // Dependencies
        'build',        // Build process
        'docs',         // Documentation
        'refactor',     // Code refactoring
        'style',        // Code style
        'test',         // Testing
      ]
    ],
    
    // BODY RULES - QUY TẮC NỘI DUNG
    'body-max-line-length': [2, 'always', 72],
    'footer-max-line-length': [2, 'always', 72],
    
    // CUSTOM RULES - QUY TẮC TÙY CHỈNH
    'subject-exclamation-mark': [2, 'never'],
    'header-max-length': [2, 'always', 100],
  },
  
  // VIETNAMESE EXAMPLES - VÍ DỤ TIẾNG VIỆT
  helpUrl: `
    📝 CÁCH VIẾT COMMIT MESSAGE CHUẨN:
    
    ✅ ĐÚNG:
    feat(ui): thêm dark mode cho cv
    fix(css): sửa lỗi responsive trên mobile
    docs(readme): cập nhật hướng dẫn cài đặt
    refactor(component): tách component thành modules nhỏ
    style(code): format code theo eslint rules
    
    ❌ SAI:
    "sửa lỗi" (thiếu type)
    "feat: add dark mode" (không có scope)
    "fix: bug" (quá ngắn)
    "feat(UI): Add Dark Mode Feature!!!" (viết hoa, có dấu chấm than)
    
    🎯 FORMAT: <type>(<scope>): <description>
    - type: loại thay đổi (feat, fix, docs, style, refactor, test, chore)
    - scope: phạm vi thay đổi (ui, css, component, config, etc.)
    - description: mô tả ngắn gọn bằng tiếng Việt
  `,
};
