import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Home from '.';
import MockedNavigator from '../../../__mocks__/MockedNavigator';

describe('Home Screen Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<MockedNavigator params={{}} component={Home} />);
  });
});
