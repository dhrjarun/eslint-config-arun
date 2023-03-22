const rulesJsxA11y = require('./lib/rules-jsx-a11y');
const rulesReact = require('./lib/rules-react');

module.exports = {
  extends: ['airbnb/rules/react', 'airbnb/rules/react-a11y', 'airbnb/rules/react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    ...rulesReact,
    ...rulesJsxA11y,
  },
};
