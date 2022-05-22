import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Body from './src/layout/Body';
import Header from './src/layout/Header';

const App = () => {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <Header points={points} />
        <Body setPoints={setPoints} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
});

export default App;
