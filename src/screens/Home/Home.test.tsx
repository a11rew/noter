import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import Home from '.';
import MockedNavigator from 'mocks/MockedNavigator';

describe('Home Screen Test Suite', () => {
  it('renders without crashing', () => {
    render(<MockedNavigator params={{}} component={Home} />);
  });
});
