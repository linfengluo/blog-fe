module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-end-tags': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-textarea-mustache': 'error',
    'vue/order-in-components': 'off',
    'vue/require-component-is': 'error',
    'vue/require-prop-types': 'off',
    'vue/require-v-for-key': 'error',
    'vue/v-on-style': 'off',
    'vue/v-bind-style': 'off',
    'vue/name-property-casing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-quotes': 'error',
    'vue/attribute-hyphenation': 'off',
    'vue/attributes-order': 'off',
    'vue/html-quotes': 'off',
  }
}
