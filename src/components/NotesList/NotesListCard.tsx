import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'common/Themed';
import Colors from 'common/Colors';
import normalize from 'utils/normalize';

interface Props {
  title: string;
  description: string;
}

const NotesListCard: React.FC<Props> = ({ description, title }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
  description: {},
});
