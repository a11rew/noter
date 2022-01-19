import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import New from '.';
import store from 'store/NoteStore';
import MockedNavigator from '../../../__mocks__/MockedNavigator';

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

describe('New Screen Test Suite', () => {
  it('renders correctly', () => {
    render(<MockedNavigator params={{}} component={New} />);
  });

  it('saves note on back press', () => {
    const wrapper = render(<MockedNavigator params={{}} component={New} />);
    const titleInput = wrapper.getByPlaceholderText('Title');
    const noteInput = wrapper.getByPlaceholderText('Note');
    const backButton = wrapper.getByTestId('back-button');

    fireEvent.changeText(titleInput, 'Testing header');
    fireEvent.changeText(noteInput, 'Testing note content');
    fireEvent.press(backButton);

    expect(store.notes[0].content).toBe('Testing note content');
    expect(store.notes[0].title).toBe('Testing header');
  });

  it('changes title appropriately', () => {
    const { getByPlaceholderText } = render(
      <MockedNavigator params={{}} component={New} />,
    );
    const input = getByPlaceholderText('Title');
    fireEvent.changeText(input, 'New title');
    expect(input.props.value).toBe('New title');
  });

  it('changes note content appropriately', () => {
    const { getByPlaceholderText } = render(
      <MockedNavigator params={{}} component={New} />,
    );
    const input = getByPlaceholderText('Note');
    fireEvent.changeText(input, 'New content');
    expect(input.props.value).toBe('New content');
  });
});
