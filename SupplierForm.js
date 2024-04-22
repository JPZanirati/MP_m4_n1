import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SupplierForm = ({ addSupplier }) => {
  const [supplier, setSupplier] = useState({
    name: '',
    address: '',
    contact: '',
    category: '',
    imageUri: null
  });

  const handleChange = (field, value) => {
    setSupplier({ ...supplier, [field]: value });
  };

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      handleChange('imageUri', result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={supplier.name} onChangeText={(text) => handleChange('name', text)} />
      <TextInput style={styles.input} placeholder="Endereço" value={supplier.address} onChangeText={(text) => handleChange('address', text)} />
      <TextInput style={styles.input} placeholder="Contato" value={supplier.contact} onChangeText={(text) => handleChange('contact', text)} />
      <TextInput style={styles.input} placeholder="Categoria" value={supplier.category} onChangeText={(text) => handleChange('category', text)} />
      <Button title="Selecione a imagem" onPress={handleImagePick} />
      <br></br>
      <Button title="Salvar" onPress={() => addSupplier(supplier)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SupplierForm;