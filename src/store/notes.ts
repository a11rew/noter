import { makeAutoObservable } from 'mobx';

export interface Note {
  title: string;
  content: string;
  id: string;
}

class NoteStore {
  // Initialize array of notes.
  public notes: Note[] = [];

  constructor() {
    // Make store class properties MobX observables.
    makeAutoObservable(this);
  }

  // Create note and generate unique ID by incrementing length.
  addNote = (note: Omit<Note, 'id'>) => {
    // Append new note to notes array.
    this.notes.push({
      title: note.title,
      content: note.content,
      id: `${this.notes.length + 1}`,
    });
  };

  // Remove note from notes with id
  removeNote = (id: string) => {
    // Remove note matching id
    this.notes = this.notes.filter(note => note.id !== id);
  };

  // Update note by id
  updateNote = (id: string, payload: Note) => {
    // Find note position in array
    const index = this.notes.findIndex(note => note.id === id);
    // Update note at said position
    this.notes[index] = payload;
  };
}

export default new NoteStore();
