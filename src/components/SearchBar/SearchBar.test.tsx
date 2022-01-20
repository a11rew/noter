import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import SearchBar from '.';
import NoteStore from 'store/NoteStore';

// Mock update filter to assert search box dispatches updates to store
jest.mock('store/NoteStore', () => {
  return {
    updateFilter: jest.fn(),
  };
});

const mockStore = NoteStore;

describe('Searchbar Test Suite', () => {
  it('renders correctly', () => {
    render(<SearchBar />);
  });

  it('updates store filter', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search your notes');
    fireEvent.changeText(input, 'Testing');
    expect(mockStore.updateFilter).toHaveBeenCalledWith('Testing');
  });
});
