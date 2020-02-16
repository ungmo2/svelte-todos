module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: 'eslint:recommended',
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // 0 "off", 1 "warn" 2 "error"
    "no-console": 0,
    "no-plusplus": 0,
    "vars-on-top": 0,
    "quotes": [2, "single"],
    "no-underscore-dangle": 0,
    "comma-dangle": [2, "never"],
    "prefer-template": 0,
    "func-names": [2, "never"],
    "arrow-parens": ["error", "as-needed"],
    "no-param-reassign": ["error", {
      "props": false
    }],
    "no-return-assign": ["warn", "always"],
    "prefer-arrow-callback": "off",
    "quote-props": ["error", "as-needed", {
      "keywords": true,
      "unnecessary": false
    }],
    "no-nested-ternary": 0,
    "max-classes-per-file": 0
  }
};