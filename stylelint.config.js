module.exports = {
  plugins: [
    "stylelint-scss"
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/no-duplicate-mixins": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/dimension-no-non-numeric-values": true,
  }
}
