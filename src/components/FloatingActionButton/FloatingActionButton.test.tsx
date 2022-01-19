import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import NewNoteActionButton from '.';

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

describe('NewNoteActionButton Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<NewNoteActionButton />);
  });
});
