module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-input-scroll-view|@react-native-seoul/masonry-list|mobx-react-lite)/).*/',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/assetsTransformer.js',
  },
};
