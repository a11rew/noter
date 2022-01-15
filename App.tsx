import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from 'navigation/index';

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
