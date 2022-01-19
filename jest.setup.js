import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.useFakeTimers();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
      id: '1',
    },
  }),
}));
