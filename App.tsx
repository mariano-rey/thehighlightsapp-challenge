import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HighscoresProvider from './src/contexts/HighscoresContext';
import PointsProvider from './src/contexts/PointsContext';
import Body from './src/layout/Body';
import Header from './src/layout/Header';
import HighScores from './src/layout/HighScores';

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 },
});

const App = () => {
  return (
    <SafeAreaView>
      <HighscoresProvider>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <PointsProvider>
            <Header />
            <GestureHandlerRootView style={styles.gestureHandler}>
              <Body />
            </GestureHandlerRootView>
          </PointsProvider>
        </ScrollView>
        <HighScores />
      </HighscoresProvider>
    </SafeAreaView>
  );
};

export default App;
