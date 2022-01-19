import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import mockNotes from '../../../__mocks__/sampleNotes';
import NoteStore from 'store/NoteStore';
import NotesList from '.';
import NotesListCard from './NotesListCard';

jest.mock('store/NoteStore', () => {
  return {
    notes: [],
  };
});

const mockStore = NoteStore as { notes: Array<any> };

describe('NotesList Test Suite', () => {
  it('renders correctly', () => {
    render(<NotesList />);
  });

  it('displays call to action when notes < 1', () => {
    const { getByText } = render(<NotesList />);
    expect(getByText("You don't have any notes.")).toBeTruthy();
  });

  it('displays notes when in store', () => {
    // Change notes in store
    mockStore.notes = [...mockNotes];

    const { getAllByText } = render(<NotesList />);
    // Check that mock data is rendered
    expect(getAllByText(`${mockStore.notes[0].content}`)).toBeTruthy();
  });
});

describe('NotesListCard Test Suite', () => {
  it('renders correctly', () => {
    render(<NotesListCard note={mockNotes[0]} />);
  });

  it('displays title correctly', () => {
    const { getByText } = render(<NotesListCard note={mockNotes[0]} />);
    expect(getByText(mockNotes[0].title)).toBeTruthy();
  });

  it('displays preview content correctly', () => {
    const { getByText } = render(<NotesListCard note={mockNotes[0]} />);
    expect(getByText(mockNotes[0].content)).toBeTruthy();
  });
});
