import React from 'react';
import { StyleSheet } from 'react-native';
import { View, TextInput } from 'common/Themed';
import Colors from 'common/Colors';
import normalize from 'utils/normalize';
import { observer } from 'mobx-react-lite';
import NoteStore from 'store/NoteStore';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        value={NoteStore.filter}
        onChangeText={e => NoteStore.updateFilter(e)}
        placeholder="Search your notes"
        style={styles.input}
      />
    </View>
  );
};

export default observer(SearchBar);

const styles = StyleSheet.create({
  container: {
    height: normalize(48),
    borderWidth: 1.3,
    borderRadius: normalize(12),
    paddingHorizontal: '3%',
  },
  input: {
    height: '100%',
    fontFamily: 'DMSans-Regular',
    fontSize: normalize(16),
  },
});
