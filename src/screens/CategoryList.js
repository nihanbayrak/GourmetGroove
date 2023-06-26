import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://northwind.vercel.app/api/categories')
      .then(response => response.json())
      .then(jsonResponse => setCategories(jsonResponse))
      .catch(error => console.log(error));
  };

  const handleCategoryPress = categoryId => {
    navigation.navigate('ProductList', { categoryId });
  };

  const handleDeleteCategory = categoryId => {
    // Perform the delete operation
    // Here, you can make an API request to delete the category with the specified ID
    // After successful deletion, you can update the category list by removing the deleted category from the state
    const updatedCategories = categories.filter(category => category.id !== categoryId);
    setCategories(updatedCategories);
  };

  const handleUpdateCategory = categoryId => {
    // Navigate to the update page with the categoryId
    navigation.navigate('CategoryUpdate', { categoryId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {categories.map(category => (
        <View style={styles.categoryItem} key={category.id}>
          <TouchableOpacity
            style={styles.categoryDetails}
            onPress={() => handleCategoryPress(category.id)}
          >
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryDescription}>{category.description}</Text>
          </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDeleteCategory(category.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleUpdateCategory(category.id)}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    color: 'gray',
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryDetails: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
