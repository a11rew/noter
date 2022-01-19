import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import Header from '.';

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

describe('Header Test Suite', () => {
  it('renders correctly', () => {
    render(<Header />);
  });
});
