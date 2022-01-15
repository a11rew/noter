import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import NotesList from '.';

describe('NotesList Test Suite', () => {
  it('renders correctly', () => {
    renderer.create(<NotesList />);
  });
});
