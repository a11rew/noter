import { Text } from 'common/Themed';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const NotesList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>aldkm</Text>
    </ScrollView>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
