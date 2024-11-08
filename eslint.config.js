module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // If using React
    'plugin:prettier/recommended' // Integrates Prettier with ESLint
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'], // If using React
  rules: {
    // Add any custom rules here
    'prettier/prettier': 'error', // Ensures Prettier formatting issues are shown as errors
  },
};
