import { defineConfig } from 'oxlint';

const sharedIgnores = [
  'node_modules/**',
  '.turbo/**',
  'build/**',
  'dist/**',
  'coverage/**',
  '.react-router/**',
  '.wrangler/**',
  'sample/**',
];

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: ['typescript', 'node', 'vitest'],
  categories: {
    correctness: 'error',
    suspicious: 'error',
  },
  env: {
    builtin: true,
    browser: true,
    node: true,
  },
  ignorePatterns: sharedIgnores,
  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'typescript/no-floating-promises': 'error',
    'typescript/no-misused-promises': 'error',
    'typescript/no-unsafe-assignment': 'error',
    'typescript/no-unsafe-call': 'error',
    'typescript/no-unsafe-member-access': 'error',
    'typescript/no-unsafe-return': 'error',
  },
});
