import React from 'react';
import { StyleSheet } from 'react-native';
import List from '@react-native-seoul/masonry-list';
import { observer } from 'mobx-react-lite';

import normalize from 'utils/normalize';
import NotesStore, { Note } from 'store/NoteStore';
import NotesListCard from './NotesListCard';
import { Text, View } from 'common/Themed';

const NotesList = (): JSX.Element => {
  // Sliced to deal with Flatlist "out of bounds read"
  const data = NotesStore.notes.slice();

  return (
    <>
      {data.length > 0 ? (
        <List
          style={styles.container}
          numColumns={2}
          data={data}
          renderItem={_renderItem}
        />
      ) : (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholder}>You don't have any notes.</Text>
          <Text style={styles.placeholder}>
            Add a note from the blue floating button
          </Text>
        </View>
      )}
    </>
  );
};

export default observer(NotesList);

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    opacity: 0.75,
  },
});

// List render function.
const _renderItem = ({ item }: { item: Note }) => (
  <NotesListCard key={item.id} note={item} />
);
