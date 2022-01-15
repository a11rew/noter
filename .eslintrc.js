module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript-prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'plugin:import/typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': [
          1,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: [
        ['assets', './src/assets'],
        ['components', './src/components'],
        ['Themed', './src/components/Themed.tsx'],
        ['constants', './src/constants'],
        ['common'],
        ['data', './src/data'],
        ['hooks', './src/hooks'],
        ['navigation', './src/navigation'],
        ['screens', './src/screens'],
        ['services', './src/services'],
        ['store', './src/store'],
        ['utils', './src/utils'],
      ],
    },
  },
};
