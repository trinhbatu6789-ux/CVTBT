/**
 * LINT-STAGED CONFIGURATION - CẤU HÌNH LINT-STAGED
 * 
 * Chạy các lệnh linting và formatting trên các file staged
 * trước khi commit để đảm bảo code quality
 */

module.exports = {
  // JAVASCRIPT/REACT FILES - FILE JAVASCRIPT/REACT
  '*.{js,jsx,ts,tsx}': [
    // 1. Chạy ESLint để kiểm tra lỗi code
    'eslint --fix',
    // 2. Chạy Prettier để format code
    'prettier --write',
    // 3. Add lại file đã được format vào staging
    'git add',
  ],
  
  // JSON FILES - FILE JSON
  '*.{json,jsonc}': [
    'prettier --write',
    'git add',
  ],
  
  // CSS FILES - FILE CSS
  '*.{css,scss,sass,less}': [
    'prettier --write',
    'git add',
  ],
  
  // MARKDOWN FILES - FILE MARKDOWN
  '*.{md,mdx}': [
    'prettier --write',
    'git add',
  ],
  
  // YAML FILES - FILE YAML
  '*.{yml,yaml}': [
    'prettier --write',
    'git add',
  ],
  
  // HTML FILES - FILE HTML
  '*.html': [
    'prettier --write',
    'git add',
  ],
  
  // ALL OTHER FILES - CÁC FILE KHÁC
  '*': [
    // Chỉ add vào staging, không chạy linting
    'git add',
  ],
};
