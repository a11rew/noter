import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Edit from '.';

describe('Edit Screen Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<Edit />);
  });
});
