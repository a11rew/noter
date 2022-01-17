import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import NewNoteActionButton from '.';

describe('NewNoteActionButton Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<NewNoteActionButton />);
  });
});
