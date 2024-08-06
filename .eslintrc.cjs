const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: ['build', 'dist', 'public', '.eslintrc.cjs'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint', 'react-refresh'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  // settings: {
  //   react: { version: 'detect' },
  //   // 'import/resolver': {
  //   //   typescript: {
  //   //     project: [
  //   //       path.resolve(__dirname, './apps/ohi-vault/tsconfig.json'),
  //   //       path.resolve(__dirname, './apps/ohi-webview-admin/tsconfig.json'),
  //   //       path.resolve(__dirname, './packages/icons/tsconfig.json'),
  //   //       path.resolve(__dirname, './packages/ui/tsconfig.json'),
  //   //       path.resolve(__dirname, './packages/tokens/tsconfig.json'),
  //   //       // 필요에 따라 다른 프로젝트의 tsconfig.json 파일도 추가
  //   //     ],
  //   //   },
  //   // },
  // },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-router-dom',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom', 'react-router-dom'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
