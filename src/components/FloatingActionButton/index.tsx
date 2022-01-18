import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { View } from 'common/Themed';
import normalize from 'utils/normalize';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from 'common/Colors';

const FloatingActionButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: Colors.gray,
        }}
        style={styles.button}
        onPress={() => navigation.navigate('New')}>
        <Icon name="plus" color={'white'} size={normalize(28)} />
      </Pressable>
    </View>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 999999,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: normalize(60),
    aspectRatio: 1,
    backgroundColor: Colors.accent,
    elevation: 15,
  },
  button: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
