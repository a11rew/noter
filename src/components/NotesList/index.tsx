import React from 'react';
import { StyleSheet } from 'react-native';
import List from '@react-native-seoul/masonry-list';
import { observer } from 'mobx-react-lite';
import normalize from 'utils/normalize';
import NotesStore, { Note } from 'store/NoteStore';
import NotesListCard from './NotesListCard';

const NotesList = (): JSX.Element => {
  return (
    <List
      style={styles.container}
      numColumns={2}
      // Sliced to deal with Flatlist "out of bounds read" error
      data={NotesStore.notes.slice()}
      renderItem={_renderItem}
    />
  );
};

export default observer(NotesList);

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
  },
});

// List render function.
const _renderItem = ({ item }: { item: Note }) => (
  <NotesListCard key={item.id} note={item} />
);
