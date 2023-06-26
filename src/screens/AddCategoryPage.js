import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import AddCategoryForm from './AddCategoryForm';

const AddCategoryPage = () => {
  return (
    <View style={styles.container}>
        <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 60,
          marginLeft: 5,
          color: 'gray',
        }}>
        Add Category
      </Text>
      <AddCategoryForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddCategoryPage;
