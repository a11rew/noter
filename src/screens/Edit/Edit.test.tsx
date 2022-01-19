import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Edit from '.';
import mockStore from 'store/NoteStore';
import MockedNavigator from '../../../__mocks__/MockedNavigator';

// Store mock
jest.mock('store/NoteStore', () => {
  return {
    findNote: () => ({
      id: '1',
      title: 'Test Notes',
      content: 'Description for my note',
    }),
  };
});

describe('Edit Screen Test Suite', () => {
  const params = {
    id: '1',
    key: 'test-key',
    name: 'Edit',
    path: 'yo',
  };

  it('renders without crashing', () => {
    render(<MockedNavigator component={Edit} params={params} />);
  });

  it('renders title correctly', () => {
    const { getByPlaceholderText } = render(
      <MockedNavigator component={Edit} params={params} />,
    );
    const input = getByPlaceholderText('Title');
    expect(input.props.value).toBe(mockStore.findNote('1')?.title);
  });

  it('changes title appropriately', () => {
    const { getByPlaceholderText } = render(
      <MockedNavigator component={Edit} params={params} />,
    );
    const input = getByPlaceholderText('Title');
    expect(input.props.value).toBe(mockStore.findNote('1')?.title);
    fireEvent.changeText(input, 'New title');
    expect(input.props.value).toBe('New title');
  });

  it('renders note content correctly', () => {
    const { getByPlaceholderText } = render(
      <MockedNavigator component={Edit} params={params} />,
    );
    const input = getByPlaceholderText('Note');
    expect(input.props.value).toBe(mockStore.findNote('1')?.content);
  });

  it('changes note content appropriately', () => {
    const { getByPlaceholderText } = render(
      <MockedNavigator component={Edit} params={params} />,
    );
    const input = getByPlaceholderText('Note');
    expect(input.props.value).toBe(mockStore.findNote('1')?.content);
    fireEvent.changeText(input, 'New content');
    expect(input.props.value).toBe('New content');
  });
});
