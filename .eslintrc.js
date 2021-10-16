module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: ["babel.config.js"],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "linebreak-style": 0,
    'no-console': 1,
    "max-len": [1, { "code": 120 }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/require-default-props': 0
  },
};
