import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'common/Themed';
import SearchBar from 'components/SearchBar';
import NotesList from 'components/NotesList';
import FloatingActionButton from 'components/FloatingActionButton';
import { observer } from 'mobx-react-lite';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <NotesList />
      <FloatingActionButton />
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

export default observer(Home);
