import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SupplierForm from './SupplierForm';
import SupplierList from './SupplierList';

export default function App() {
  const [suppliers, setSuppliers] = useState([]);

  const addSupplier = (newSupplier) => {
    newSupplier.id = suppliers.length + 1;
    setSuppliers([...suppliers, newSupplier]);
  };

  return (
    <View style={styles.container}>
      <SupplierForm addSupplier={addSupplier} />
      <SupplierList suppliers={suppliers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
});
