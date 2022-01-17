import React, { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { View } from 'common/Themed';
import normalize from 'utils/normalize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from 'common/Colors';
import NoteStore from 'store/NoteStore';

interface Props {
  id: string;
}

const DeleteActionButton: React.FC<Props> = ({ id }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    NoteStore.removeNote(id);
    navigation.navigate('Home');
  }, [id]);

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: Colors.gray,
        }}
        style={styles.button}
        onPress={handlePress}>
        <Icon name="trash" size={normalize(20)} color="black" />
      </Pressable>
    </View>
  );
};

export default DeleteActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 999999,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: normalize(60),
    aspectRatio: 1,
    backgroundColor: 'white',
    elevation: 15,
  },
  button: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
