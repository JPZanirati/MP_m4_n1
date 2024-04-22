import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const SupplierList = ({ suppliers }) => {
  return (
    <FlatList
      data={suppliers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.image} />}
          <Text style={styles.text}>Nome: {item.name}</Text>
          <Text style={styles.text}>Endereço: {item.address}</Text>
          <Text style={styles.text}>Contato: {item.contact}</Text>
          <Text style={styles.text}>Categoria: {item.category}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
});

export default SupplierList;
