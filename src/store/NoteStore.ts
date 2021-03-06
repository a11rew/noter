import { action, makeAutoObservable, set, toJS } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  title: string;
  content: string;
  id: string;
}

class NoteStore {
  // Initialize array of notes.
  private _notes: Note[] = [];
  private _filter: string = '';
  private _uuid: number = 1;

  constructor() {
    // Make store class properties MobX observables.
    makeAutoObservable(this);

    // Fetch notes from async storage
    refreshNotes(this);
  }

  // Create note and generate unique ID by incrementing length.
  addNote = (note: Omit<Note, 'id'>) => {
    // Append new note to notes array.

    this._notes.push({
      title: note.title,
      content: note.content,
      id: `${(this._uuid += 1)}`,
    });
    persistNotes(this);
  };

  // Remove note from notes with id
  removeNote = (id: string) => {
    // Remove note matching id
    this._notes = this._notes.filter(note => note.id !== id);
    persistNotes(this);
  };

  // Update note by id
  updateNote = (id: string, payload: Note) => {
    // Find note position in array
    const index = this._notes.findIndex(note => note.id === id);
    // Update note at said position
    this._notes[index] = payload;

    // Update persisted store
    persistNotes(this);
  };

  // Find one note
  findNote = (id: string) => {
    return this._notes.find(note => note.id === id);
  };

  get notes() {
    // FIlter
    let filtered = this._notes.filter(
      note =>
        note.title.match(new RegExp(this._filter, 'i')) ||
        note.content.match(new RegExp(this._filter, 'i')),
    );

    // Sort
    filtered = filtered.sort((a, b) => (Number(a.id) < Number(b.id) ? 1 : -1));

    return filtered;
  }

  // Search string
  get filter() {
    return this._filter;
  }

  // Search filter string update
  updateFilter(value: string) {
    this._filter = value;
  }
}

const refreshNotes = (_this: any) => {
  // Fetch previously persisted notes
  AsyncStorage.getItem('noter-notes', (err, res) => {
    if (err) {
      console.warn(err);
    } else {
      // Refresh store
      action(() => set(_this, JSON.parse(res!)))();
    }
  });
};

const persistNotes = (_this: any) => {
  // Convert MobX observables to regular JS object.
  const notes = toJS(_this);

  // Send notes to local storage
  AsyncStorage.setItem('noter-notes', JSON.stringify(notes), err => {
    // Handle error - could be error reporting service.
    if (err) console.warn(err);
  });
};

export default new NoteStore();
