module.exports = {
  overrides: [
    {
      files: ['.prettierrc'],
      options: {
        parser: 'json',
      },
    },
  ],
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 120,
  semi: true,
};
