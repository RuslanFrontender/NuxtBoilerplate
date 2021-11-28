module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'airbnb-base',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'max-len': ['error', { code: 100, ignoreStrings: true }],
    'vue/no-unregistered-components': ['error', { ignorePatterns: [] }],
    'vue/no-template-target-blank': ['error', {
      'allowReferrer': true,
      'enforceDynamicLinks': 'always'
    }],
    'vue/multi-word-component-names': ['error'],
    'vue/no-template-key': ['error'],
    'vue/no-unused-components': ['error', {
      'ignoreWhenBindingPresent': true
    }],
    'vue/no-unused-refs': ['error']
  }
}
