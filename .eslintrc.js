module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/exhaustive-deps': 'off',
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
        ['common'],
        ['hooks', './src/hooks'],
        ['navigation', './src/navigation'],
        ['screens', './src/screens'],
        ['store', './src/store'],
        ['utils', './src/utils'],
      ],
    },
  },
};
