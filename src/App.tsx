import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View></View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
