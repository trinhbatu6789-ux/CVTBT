/**
 * ESLINT CONFIGURATION - CẤU HÌNH ESLINT V9
 * 
 * Cấu hình ESLint mới theo format v9.0+
 * Hỗ trợ React, JavaScript best practices
 */

import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // GLOBAL IGNORES - BỎ QUA TOÀN CỤC
  {
    ignores: [
      'dist/',
      'build/',
      'node_modules/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'public/',
      'coverage/',
      '*.log',
      'logs/',
      '.env*',
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      'storybook-static/',
      'tmp/',
      'temp/',
    ],
  },

  // JAVASCRIPT FILES - FILE JAVASCRIPT
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // BROWSER GLOBALS - BIẾN TOÀN CỤC BROWSER
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        
        // REACT GLOBALS - BIẾN TOÀN CỤC REACT
        React: 'readonly',
        JSX: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // JAVASCRIPT RECOMMENDED RULES - QUY TẮC JAVASCRIPT CƠ BẢN
      ...js.configs.recommended.rules,

      // REACT RULES - QUY TẮC REACT
      'react/prop-types': 'off', // Tắt prop-types (sử dụng JSDoc)
      'react/react-in-jsx-scope': 'off', // Tắt React import (React 17+)
      'react/jsx-uses-react': 'off', // Tắt warning React unused
      'react/jsx-uses-vars': 'error', // Báo lỗi khi biến JSX không được sử dụng
      'react/jsx-key': 'error', // Bắt buộc key cho list items
      'react/jsx-no-duplicate-props': 'error', // Không duplicate props
      'react/jsx-no-undef': 'error', // Báo lỗi undefined JSX elements
      'react/jsx-fragments': ['error', 'syntax'], // Sử dụng <> thay vì React.Fragment
      'react/jsx-boolean-value': ['error', 'never'], // Không boolean props
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // Không {} cho string literals
      
      // REACT HOOKS RULES - QUY TẮC REACT HOOKS
      'react-hooks/rules-of-hooks': 'error', // Tuân thủ Rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Cảnh báo missing dependencies
      
      // REACT REFRESH RULES - QUY TẮC REACT REFRESH
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      
      // GENERAL JAVASCRIPT RULES - QUY TẮC JAVASCRIPT CHUNG
      'no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }], // Báo lỗi unused variables
      'no-console': 'warn', // Cảnh báo khi sử dụng console.log
      'no-debugger': 'error', // Báo lỗi khi có debugger
      'no-duplicate-imports': 'error', // Không import duplicate
      'no-var': 'error', // Sử dụng let/const thay vì var
      'prefer-const': 'error', // Ưu tiên const khi có thể
      'prefer-template': 'error', // Ưu tiên template literals
      'eqeqeq': 'error', // Sử dụng === thay vì ==
      'curly': 'error', // Bắt buộc curly braces
      
      // STYLE RULES - QUY TẮC STYLE
      'indent': ['error', 2], // Indent 2 spaces
      'quotes': ['error', 'single'], // Sử dụng single quotes
      'semi': ['error', 'always'], // Bắt buộc semicolon
      'comma-dangle': ['error', 'always-multiline'], // Comma ở cuối multiline
      'object-curly-spacing': ['error', 'always'], // Space trong object
      'array-bracket-spacing': ['error', 'never'], // Không space trong array brackets
      'space-before-function-paren': ['error', 'always'], // Space trước function paren
      'keyword-spacing': 'error', // Space sau keywords
      'space-infix-ops': 'error', // Space xung quanh operators
      'space-before-blocks': 'error', // Space trước blocks
      
      // IMPORT/EXPORT RULES - QUY TẮC IMPORT/EXPORT
      'no-duplicate-imports': 'error', // Không import duplicate
      'sort-imports': ['error', { 
        ignoreCase: true, 
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }], // Sắp xếp imports
      
      // CUSTOM RULES - QUY TẮC TÙY CHỈNH
      'max-len': ['warn', { 
        code: 100, 
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true
      }], // Giới hạn độ dài dòng
      'no-trailing-spaces': 'error', // Không space ở cuối dòng
      'eol-last': 'error', // Newline ở cuối file
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }], // Giới hạn empty lines
      'no-mixed-spaces-and-tabs': 'error', // Không mix spaces và tabs
      'no-tabs': 'error', // Không sử dụng tabs
      
      // COMPLEXITY RULES - QUY TẮC ĐỘ PHỨC TẠP
      'complexity': ['warn', 10], // Giới hạn độ phức tạp
      'max-depth': ['warn', 4], // Giới hạn độ sâu nested
      'max-lines': ['warn', 300], // Giới hạn số dòng trong file
      'max-lines-per-function': ['warn', 50], // Giới hạn số dòng trong function
      
      // BEST PRACTICES - THỰC HÀNH TỐT NHẤT
      'no-alert': 'warn', // Cảnh báo sử dụng alert
      'no-eval': 'error', // Không sử dụng eval
      'no-implied-eval': 'error', // Không implied eval
      'no-new-func': 'error', // Không new Function
      'no-return-assign': 'error', // Không assign trong return
      'no-self-compare': 'error', // Không so sánh với chính nó
      'no-throw-literal': 'error', // Không throw literal
      'no-useless-return': 'error', // Không return không cần thiết
      'prefer-arrow-callback': 'error', // Ưu tiên arrow functions
      'prefer-destructuring': ['error', { object: true, array: false }], // Ưu tiên destructuring
    },
  },

  // CONFIG FILES - FILE CẤU HÌNH
  {
    files: ['**/*.config.{js,mjs,cjs}', '**/*.config.*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'off', // Cho phép console trong config files
    },
  },
];
