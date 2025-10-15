import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js'],
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        performance: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        IntersectionObserver: 'readonly',
        MutationObserver: 'readonly',
        ResizeObserver: 'readonly',
        HTMLElement: 'readonly',
        Element: 'readonly',
        getComputedStyle: 'readonly',
        matchMedia: 'readonly',
        FormData: 'readonly',
        AbortController: 'readonly',
        MessageChannel: 'readonly',
        queueMicrotask: 'readonly',
        reportError: 'readonly',
        ShadowRoot: 'readonly',
        navigation: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'error',
      'no-fallthrough': 'error',
      'no-cond-assign': 'error',
      'no-empty': 'warn',
      'no-func-assign': 'error',
      'no-redeclare': 'error',
      'no-unreachable': 'error',
      'no-prototype-builtins': 'error',
      'no-useless-escape': 'error',
      'no-control-regex': 'error',
      'no-misleading-character-class': 'error',
      'no-constant-condition': 'error',
      'valid-typeof': 'error',
      'getter-return': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.config.js', '**/*.config.mjs'],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
];
