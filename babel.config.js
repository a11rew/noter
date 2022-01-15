// TODO: Cleanup aliases in tsconfig, here and eslint
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: './src/',
        alias: {
          assets: './src/assets',
          components: './src/components',
          Themed: './src/components/Themed.tsx',
          constants: './src/constants',
          common: './src/common',
          data: './src/data',
          hooks: './src/hooks',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
