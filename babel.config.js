module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: './src/',
        alias: {
          assets: './src/assets',
          components: './src/components',
          common: './src/common',
          hooks: './src/hooks',
          mocks: './src/mocks',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
