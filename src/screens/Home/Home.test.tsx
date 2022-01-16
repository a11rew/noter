import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Home from '.';

describe('Home Screen Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<Home />);
  });
});
