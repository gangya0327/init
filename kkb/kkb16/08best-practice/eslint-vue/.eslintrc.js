module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI
    // 'comma-dangle': ['error', 'always-multiline'], // 要求或禁止使用拖尾逗号
    'spaced-comment': ['error', 'always'], // 要求或禁止在注释前有空白
    // 'quote-props': ['error', 'as-needed'], // 要求对象字面量属性名称使用引号，要求对象字面量属性名称都使用引号
  },
}
