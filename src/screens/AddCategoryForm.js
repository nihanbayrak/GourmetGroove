import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDetail, setCategoryDetail] = useState('');

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the service
    console.log('Category Name:', categoryName);
    console.log('Category Detail:', categoryDetail);
    // Reset form fields
    setCategoryName('');
    setCategoryDetail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category Name:</Text>
      <TextInput
        style={styles.input}
        value={categoryName}
        onChangeText={text => setCategoryName(text)}
      />

      <Text style={styles.label}>Category Detail:</Text>
      <TextInput
        style={styles.input}
        value={categoryDetail}
        onChangeText={text => setCategoryDetail(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddCategoryForm;
