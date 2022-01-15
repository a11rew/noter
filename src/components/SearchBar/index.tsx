import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { View, Text } from 'common/Themed';
import Colors from 'common/Colors';
import normalize from 'utils/normalize';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search your notes" style={styles.input} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: normalize(48),
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: normalize(12),
    paddingHorizontal: '3%',
  },
  input: {
    height: '100%',
    fontFamily: 'DMSans-Regular',
    fontSize: normalize(16),
  },
});
