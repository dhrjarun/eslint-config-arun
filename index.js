const rulesCore = require('./lib/rules-core');
const { ecmaVersion } = require('./constant');

module.exports = {
  env: {
    browser: true,
    node: true,
    [`es${ecmaVersion}`]: true,
  },
  plugins: ['import'],
  settings: {
    'import/ignore': ['node_modules', '\\.(css|md|svg|json)$'],
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    ...rulesCore,
  },
};
