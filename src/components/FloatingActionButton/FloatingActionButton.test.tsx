import React from 'react';
import 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

import FloatingActionButton from '.';

// Mock navigate function to assert calling
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

describe('FloatingActionButton Test Suite', () => {
  it('renders without crashing', () => {
    render(<FloatingActionButton />);
  });

  it('navigates to new note screen on press', () => {
    const { getByTestId } = render(<FloatingActionButton />);
    const button = getByTestId('test-pressable');
    fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
