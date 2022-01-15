import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import SearchBar from '.';

describe('Searchbar Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<SearchBar />);
  });
});
