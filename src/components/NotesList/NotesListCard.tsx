import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'common/Themed';
import Colors from 'common/Colors';
import normalize from 'utils/normalize';
import { useNavigation } from '@react-navigation/native';
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
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.content}>{note.content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotesListCard;

const styles = StyleSheet.create({
  wrapper: {
    margin: normalize(4),
  },
  container: {
    flexGrow: 0,
    borderWidth: 1,
    borderColor: Colors.gray,
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
