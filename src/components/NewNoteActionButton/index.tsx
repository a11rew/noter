import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { View } from 'common/Themed';
import normalize from 'utils/normalize';

const NewNoteActionButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('New')}>
      <View style={styles.plusBarContainer}>
        <View style={styles.plusBar} />
        <View style={[styles.plusBar, { transform: [{ rotate: '90deg' }] }]} />
      </View>
    </Pressable>
  );
};

export default NewNoteActionButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
    width: normalize(75),
    borderRadius: 999999,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 15,
  },
  plusBarContainer: {
    position: 'relative',
    width: '60%',
    overflow: 'hidden',
    aspectRatio: 1,
  },
  plusBar: {
    height: '100%',
    width: '10%',
    position: 'absolute',
    left: '45%',
    backgroundColor: 'black',
  },
});
