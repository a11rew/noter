import React, { useEffect, useMemo, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
import { useDebouncedCallback } from 'use-debounce';

import { View, TextInput } from 'common/Themed';
import normalize from 'utils/normalize';
import NoteStore from 'store/NoteStore';
import DeleteActionButton from 'components/FloatingActionButton/DeleteActionButton';
import useIsKeyboardOpen from 'hooks/useIsKeyboardOpen';
import { NavigationStackScreenProps } from '../../navigation/types';

interface Props extends NavigationStackScreenProps<'Edit'> {}

const Edit: React.FC<Props> = ({ route }) => {
  // Get note details
  const { id } = route.params;
  const note = useMemo(() => NoteStore.findNote(id), [id]);

  // Control inputs
  const [noteContent, setNoteContent] = useState(note?.content || '');
  const [noteTitle, setNoteTitle] = useState(note?.title || '');

  // Get keyboard state
  const isKeyboardOpen = useIsKeyboardOpen();

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
        <InputScrollView>
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
        </InputScrollView>
      </KeyboardAvoidingView>

      {
        // Hide delete button when editing
        !isKeyboardOpen && <DeleteActionButton id={note!.id} />
      }
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
    paddingBottom: '20%',
  },
});
