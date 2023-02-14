module.exports = {
  plugins: ['jest', 'jest-dom', 'testing-library'],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/recommended',
      ],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
