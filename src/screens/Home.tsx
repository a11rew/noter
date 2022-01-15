import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'common/Themed';

const Home = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Yo</Text>
      <Text>Come on g</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
  },
});

export default Home;
