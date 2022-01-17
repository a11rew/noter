import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import New from '.';

describe('New Screen Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<New />);
  });
});
