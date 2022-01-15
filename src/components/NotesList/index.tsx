import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import normalize from 'utils/normalize';
import NotesListCard from './NotesListCard';

const NotesList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={2}
      data={notesData}
      renderItem={_renderItem}
      keyExtractor={e => e.key}
    />
  );
};

export default NotesList;

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
  },
});

/**
 * Flatlist render function.
 */
const _renderItem = ({ item }) => (
  <NotesListCard title={item.title} description={item.description} />
);

const notesData = [
  {
    key: '1',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '2',
    title: 'Notes',
    description:
      'DescriptionvDescriptionDescriptionDescription DescriptionvDescriptionDescriptionDescription for my note nice nice',
  },
  {
    key: '3',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '4',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '5',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '6',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '7',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '8',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
  {
    key: '9',
    title: 'Notes',
    description: 'Description for my note nice nice',
  },
];
