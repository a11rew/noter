import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});
