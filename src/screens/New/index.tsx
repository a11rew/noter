import { useFocusEffect } from '@react-navigation/native';
import { View, TextInput } from 'common/Themed';
import Header from 'components/Header';
import React, { useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  BackHandler,
} from 'react-native';
import NoteStore from 'store/NoteStore';
import normalize from 'utils/normalize';

const New: React.FC = () => {
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  const handleLeave = useCallback(() => {
    // Add note if a title or content has been provided
    if (noteContent || noteTitle) {
      NoteStore.addNote({
        content: noteContent,
        title: noteTitle,
      });
    }

    return false;
  }, [noteContent, noteTitle]);

  // Use navigation lifecycle to handle registration
  useFocusEffect(
    useCallback(() => {
      // Register back button handler
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleLeave,
      );

      // Unsubscribe from back handler listener
      return () => backHandler.remove();
    }, [handleLeave]),
  );

  return (
    <>
      <Header withBack onBack={handleLeave} />
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
      </View>
    </>
  );
};

export default New;

const styles = StyleSheet.create({
  wrapper: {
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
  },
});
