import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PointsProvider from './src/contexts/PointsContext';
import Body from './src/layout/Body';
import Header from './src/layout/Header';

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 },
});

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PointsProvider>
          <Header />
          <GestureHandlerRootView style={styles.gestureHandler}>
            <Body />
          </GestureHandlerRootView>
        </PointsProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
