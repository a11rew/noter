import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import normalize from 'utils/normalize';
import NotesStore, { Note } from 'store/NoteStore';
import NotesListCard from './NotesListCard';

const NotesList = (): JSX.Element => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={2}
      data={NotesStore.notes}
      renderItem={_renderItem}
      keyExtractor={e => e.id}
    />
  );
};

export default observer(NotesList);

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
  },
});

// Flatlist render function.
const _renderItem = ({ item }: { item: Note }) => (
  <NotesListCard title={item.title} description={item.content} />
);
