module.exports = {
  extends: ['airbnb/rules/react', 'airbnb/rules/react-a11y', 'airbnb/rules/react-hooks'],
  settings: {
    // for typescript support in react https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/index.js#L4-L18
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    // Prepend 'mjs' to match shared config
    // Original: ['.js', '.jsx', '.json']
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // for typescript support in react https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/index.js#L4-L18
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // Original: ['.jsx']
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // personal preferences
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],
  },
};
