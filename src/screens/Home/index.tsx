import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'common/Themed';
import SearchBar from 'components/SearchBar';
import NotesList from 'components/NotesList';
import NewNoteActionButton from 'components/NewNoteActionButton';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <NotesList />
      <NewNoteActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '3%',
    position: 'relative',
  },
});

export default Home;
