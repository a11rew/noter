import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Header from '.';

describe('Header Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<Header />);
  });
});
