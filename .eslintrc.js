module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // https://vuejs.github.io/eslint-plugin-vue/rules/
    'plugin:vue/recommended',
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules
    '@vue/airbnb',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
  ],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-assign': 0,
    'no-plusplus': 0,
    'no-shadow': ['error', { allow: ['state'] }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/max-attributes-per-line': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
