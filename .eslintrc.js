const path = require('path');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'no-debugger': 'off',
    'no-console': 'off',
    'object-curly-newline': ['warn', {
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: 'never',
    }],
    indent: 'off',
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    }],
    'import/no-webpack-loader-syntax': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.vue', '.ts'],
        map: [
          ['@', path.resolve(__dirname, './src')],
        ],
      },
      node: {
        paths: ['src', 'csv', 'node_modules'],
      },
    },
  },
};
