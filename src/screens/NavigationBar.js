import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();

  const handlePressProducts = () => {
    navigation.navigate('AllProducts');
  };

  const handlePressCategories = () => {
    navigation.navigate('CategoryList');
  };

  const handlePressOrders = () => {
    navigation.navigate('AddCategoryPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={handlePressProducts}>
        <Text style={styles.navText}>All Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handlePressCategories}>
        <Text style={styles.navText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handlePressOrders}>
        <Text style={styles.navText}>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 2,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NavigationBar;