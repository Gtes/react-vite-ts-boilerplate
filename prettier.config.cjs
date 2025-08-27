/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
  ],

  importOrder: [
    '^react$',
    '',
    '^react-.*',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
  ],
};
