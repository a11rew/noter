import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'common/Themed';
import Navigation from 'navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
