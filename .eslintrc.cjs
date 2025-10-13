module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@eslint/js/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    'public',
    '*.config.js',
    '*.config.cjs',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // REACT RULES - QUY TẮC REACT
    'react/prop-types': 'off', // Tắt prop-types (sử dụng TypeScript hoặc JSDoc)
    'react/react-in-jsx-scope': 'off', // Tắt React import (React 17+)
    'react/jsx-uses-react': 'off', // Tắt warning React unused
    'react/jsx-uses-vars': 'error', // Báo lỗi khi biến JSX không được sử dụng
    'react/jsx-key': 'error', // Bắt buộc key cho list items
    'react/jsx-no-duplicate-props': 'error', // Không duplicate props
    'react/jsx-no-undef': 'error', // Báo lỗi undefined JSX elements

    // REACT HOOKS RULES - QUY TẮC REACT HOOKS
    'react-hooks/rules-of-hooks': 'error', // Tuân thủ Rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Cảnh báo missing dependencies

    // GENERAL JAVASCRIPT RULES - QUY TẮC JAVASCRIPT CHUNG
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ], // Báo lỗi unused variables
    'no-console': 'warn', // Cảnh báo khi sử dụng console.log
    'no-debugger': 'error', // Báo lỗi khi có debugger
    'no-duplicate-imports': 'error', // Không import duplicate
    'no-var': 'error', // Sử dụng let/const thay vì var
    'prefer-const': 'error', // Ưu tiên const khi có thể
    'prefer-template': 'error', // Ưu tiên template literals
    eqeqeq: 'error', // Sử dụng === thay vì ==
    curly: 'error', // Bắt buộc curly braces

    // STYLE RULES - QUY TẮC STYLE
    indent: ['error', 2], // Indent 2 spaces
    quotes: ['error', 'single'], // Sử dụng single quotes
    semi: ['error', 'always'], // Bắt buộc semicolon
    'comma-dangle': ['error', 'always-multiline'], // Comma ở cuối multiline
    'object-curly-spacing': ['error', 'always'], // Space trong object
    'array-bracket-spacing': ['error', 'never'], // Không space trong array brackets
    'space-before-function-paren': ['error', 'always'], // Space trước function paren

    // IMPORT/EXPORT RULES - QUY TẮC IMPORT/EXPORT
    'import/no-unresolved': 'off', // Tắt (cần webpack config)
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ], // Sắp xếp imports theo thứ tự

    // CUSTOM RULES - QUY TẮC TÙY CHỈNH
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ], // Giới hạn độ dài dòng
    'no-trailing-spaces': 'error', // Không space ở cuối dòng
    'eol-last': 'error', // Newline ở cuối file
  },
  globals: {
    // GLOBAL VARIABLES - BIẾN TOÀN CỤC
    process: 'readonly',
    Buffer: 'readonly',
  },
};
