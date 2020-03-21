module.exports = {
  // specifies the eslint parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // allows for the parsing of modern ecmascript features
    ecmaVersion: 2019,
    // allows for the use of imports
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest', 'prettier'],
  rules: {
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'prettier/prettier': ['error', require('./prettier.config.js')],
    // Typescript stuff
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
