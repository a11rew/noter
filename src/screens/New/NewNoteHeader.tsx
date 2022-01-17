import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'common/Themed';
import normalize from 'utils/normalize';

const NewNoteHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Noter - New</Text>
    </View>
  );
};

export default NewNoteHeader;

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  heading: {
    fontFamily: 'DMSans-Bold',
    fontSize: normalize(24),
  },
});
