module.exports = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['airbnb-typescript/base'],
    },
  ],
};
