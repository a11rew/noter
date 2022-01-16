import React, { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import normalize from 'utils/normalize';
import NoteStore from 'store/NoteStore';
import { NavigationStackScreenProps } from '../../navigation/types';

interface Props extends NavigationStackScreenProps<'Edit'> {}

const Edit: React.FC<Props> = ({ route }) => {
  const id = route.params.id;
  const note = useMemo(() => NoteStore.findNote(id), [id]);
  const [noteContent, setNoteContent] = useState(note?.content);
  const [noteTitle, setNoteTitle] = useState(note?.title);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <TextInput
          placeholder="Title"
          style={styles.title}
          value={noteTitle}
          onChangeText={e => setNoteTitle(e)}
        />
        <TextInput
          placeholder="Note"
          multiline
          scrollEnabled={false}
          style={styles.note}
          value={noteContent}
          onChangeText={e => setNoteContent(e)}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'DMSans-Medium',
    fontSize: normalize(22),
  },
  note: {
    fontFamily: 'DMSans-Medium',
    fontSize: normalize(16),
    height: '100%',
    textAlignVertical: 'top',
  },
});
