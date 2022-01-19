import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import { Text, View } from 'common/Themed';
import normalize from 'utils/normalize';
import { Note } from 'store/NoteStore';

interface Props {
  note: Note;
}

const NotesListCard: React.FC<Props> = ({ note }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Edit', {
      id: note.id,
    });
  }, [note.id]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {note.title}
          </Text>
          <Text style={styles.content} ellipsizeMode="tail" numberOfLines={8}>
            {note.content}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default observer(NotesListCard);

const styles = StyleSheet.create({
  wrapper: {
    margin: normalize(4),
  },
  container: {
    flexGrow: 0,
    borderWidth: 1,
    borderRadius: normalize(12),
    padding: normalize(8),
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: normalize(18),
    marginBottom: normalize(6),
  },
  content: {},
});
