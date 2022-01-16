import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'common/Themed';
import SearchBar from 'components/SearchBar';
import NotesList from 'components/NotesList';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <NotesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '3%',
  },
});

export default Home;
