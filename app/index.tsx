// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListComponent from './components/ListComponent'; // Import ListComponent

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Fruit App!</Text>
      <ListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
