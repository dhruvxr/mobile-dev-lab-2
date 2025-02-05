// app/components/ListComponent.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Import useRouter from expo-router

const ListComponent = () => {
  const router = useRouter();  // Initialize the router

  const items = [
    { name: 'Apple', route: '/apple' },
    { name: 'Orange', route: '/orange' },
    { name: 'Mango', route: '/mango' },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.listItem}
          onPress={() => router.push(item.route)}  // Navigate to the respective fruit page
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ListComponent;
