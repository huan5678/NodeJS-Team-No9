module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  overrides: [
    {
      files: ['**/vite.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
     // import/order rules setting
     files: ['src/**/*.{js,jsx,ts,tsx}'],
     rules: {
       'import/order': [
         'error',
         {
           groups: [
             'builtin',
             'external',
             'parent',
             'sibling',
             'index',
             'object',
             'type',
           ],
           alphabetize: {
             order: 'asc',
           },
           'newlines-between': 'always',
         },
       ],
     },
   },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
