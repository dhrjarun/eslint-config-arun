// const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  // This rule reports any imports that come after non-import statements. https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
  'import/first': ERROR,

  'import/no-amd': ERROR,
  'import/no-webpack-loader-syntax': ERROR,
};
