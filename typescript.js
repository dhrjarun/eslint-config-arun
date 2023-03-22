const rulesTypescript = require('./lib/rules-typescript');
const { ecmaVersion } = require('./constant');

module.exports = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:import/typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion,
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      settings: {
        'import/parsers': {
          [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
          [require.resolve('eslint-import-resolver-node')]: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          [require.resolve('eslint-import-resolver-typescript')]: {
            alwaysTryTypes: true,
          },
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {
        ...rulesTypescript,
      },
    },
  ],
};
