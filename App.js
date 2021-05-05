import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const reducers = {
  todos: (state = [], action) => {
    console.log(action);
    return state
  }
}
const MyApp = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const store = createStore(combineReducers({
  ...reducers,
}))

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
