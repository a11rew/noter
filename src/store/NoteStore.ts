import { action, autorun, makeAutoObservable, set, toJS } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  title: string;
  content: string;
  id: string;
}

const notesData = [
  {
    id: '1',
    title: 'Notes',
    content: 'Description for my note nice nice',
  },
  {
    id: '2',
    title: 'Notes',
    content:
      'DescriptionvDescriptionDescriptionDescription DescriptionvDescriptionDescriptionDescription for my note nice nice',
  },
  {
    id: '3',
    title: 'Notes',
    content: 'Description for my note nice nice',
  },
  {
    id: '4',
    title: 'Notes',
    content:
      'DescriptionvDescriptionDescriptionDescription DescriptionvDescriptionDescriptionDescription for my note nice nice',
  },
  {
    id: '5',
    title: 'Notes',
    content: 'Description for my note nice nice',
  },
  {
    id: '6',
    title: 'Notes',
    content: 'Description for my note nice nice',
  },
  {
    id: '7',
    title: 'Notes',
    content:
      'DescriptionvDescriptionDescriptionDescription DescriptionvDescriptionDescriptionDescription for my note nice nice',
  },
  {
    id: '8',
    title: 'Notes',
    content: 'Description for my note nice nice',
  },
  {
    id: '9',
    title: 'Notes',
    content: 'Description for my note nice nice',
  },
];

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

  // Find one note
  findNote = (id: string) => {
    return this.notes.find(note => note.id === id);
  };
}

const persistNotes = (_this: any) => {
  // Fetch previously persisted notes
  AsyncStorage.getItem('noter-notes', (err, res) => {
    if (err) {
      console.warn(err);
    } else {
      // Refresh store
      action(() => set(_this, JSON.parse(res!)))();
    }
  });

  // MobX utility function ran everytime notes change.
  autorun(() => {
    // Convert MobX observables to regular JS object.
    const notes = toJS(_this);

    // Send notes to local storage
    AsyncStorage.setItem('noter-notes', JSON.stringify(notes), err => {
      // Handle error - could be error reporting service.
      if (err) console.warn(err);
    });
  });
};

export default new NoteStore();