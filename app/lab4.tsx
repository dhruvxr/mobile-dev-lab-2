// app/lab4.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import vacationDestinations from './constants/list_items'; // Import vacation destinations

export default function Lab4() {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const handleSelectDestination = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((destinationId) => destinationId !== id)
        : [...prevSelected, id]
    );
  };

  const renderDestination = ({ item }: any) => (
    <TouchableOpacity
      style={styles.destinationItem}
      onPress={() => handleSelectDestination(item.id)}
    >
      <View style={styles.destinationInfo}>
        <Text style={styles.destinationName}>{item.location}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Avg Temp: {item.average_yearly_temperature}</Text>
      </View>
      {selectedDestinations.includes(item.id) && (
        <Text style={styles.checkmark}>{"\u2705"}</Text> // Checkmark for selection
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        renderItem={renderDestination}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  destinationItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  destinationInfo: {
    flex: 1,
  },
  destinationName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkmark: {
    fontSize: 24,
    color: 'green',
  },
});
