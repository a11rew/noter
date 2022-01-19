import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Edit from '.';
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

  it('renders correctly', () => {
    renderer.create(<MockedNavigator component={Edit} params={params} />);
  });
});
