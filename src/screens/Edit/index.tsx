import React, { useEffect, useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

import { View } from 'common/Themed';
import normalize from 'utils/normalize';
import NoteStore from 'store/NoteStore';

import { NavigationStackScreenProps } from '../../navigation/types';
import DeleteActionButton from 'components/FloatingActionButton/DeleteActionButton';

interface Props extends NavigationStackScreenProps<'Edit'> {}

const Edit: React.FC<Props> = ({ route }) => {
  const id = route.params.id;
  const note = useMemo(() => NoteStore.findNote(id), [id]);
  const [noteContent, setNoteContent] = useState(note?.content || '');
  const [noteTitle, setNoteTitle] = useState(note?.title || '');

  // Persist content and title on change
  useEffect(
    // Batch writes to store and subsequently persistence
    // Improves performance by not setting off writes on every keypress
    useDebouncedCallback(() => {
      // Write note to store
      NoteStore.updateNote(note!.id, {
        content: noteContent,
        title: noteTitle,
        id,
      });
    }, 500),
    [noteContent, noteTitle],
  );

  return (
    <View style={styles.wrapper}>
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
      <DeleteActionButton id={note!.id} />
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
  },
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
