import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import New from '.';
import MockedNavigator from '../../../__mocks__/MockedNavigator';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('New Screen Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<MockedNavigator params={{}} component={New} />);
  });
});
