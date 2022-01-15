import { autorun, makeAutoObservable, set, toJS } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    // Fetch notes from async storage
    persistNotes(this);
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

const persistNotes = async (_this: any) => {
  try {
    // Fetch previously persisted notes
    const storedNotes = await AsyncStorage.getItem('noter-notes');
    if (storedNotes) {
      // Refresh store
      set(_this, storedNotes);
    }
  } catch (error) {
    // Handle error - could be error reporting service.
    console.warn(error);
  }

  // MobX utility function run everytime notes change.
  autorun(async () => {
    // Convert MobX observables to regular JS object.
    const notes = toJS(_this);

    try {
      // Send notes to local storage
      await AsyncStorage.setItem('noter-notes', JSON.stringify(notes));
    } catch (error) {
      // Handle error - could be error reporting service.
      console.warn(error);
    }
  });
};

export default new NoteStore();
