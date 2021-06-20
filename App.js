import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style="{style.textStyle}" >hello internet !</Text>
      <Text style="{style.textStyle}" >My first app !</Text>
      <Text style="{style.textStyle}" >Mandeep Singh  !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '800'
  }
});
