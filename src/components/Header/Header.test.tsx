import React from 'react';
import 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import Header from '.';

// Mock navigate function to assert calling
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedNavigate,
    }),
  };
});

describe('Header Test Suite', () => {
  it('renders correctly', () => {
    render(<Header />);
  });

  it('navigates to new note screen on press', () => {
    const { getByTestId } = render(<Header withBack />);
    const button = getByTestId('back-button');
    fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
