import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';


const ProductList = ({ route }) => {
  const { categoryId } = route.params;
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const handleProductPress = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(`https://northwind.vercel.app/api/categories/${categoryId}/products`)
      .then(response => response.json())
      .then(jsonResponse => setProducts(jsonResponse))
      .catch(error => console.log(error));
  };

  return (
    <View>
      {products.map(product => (
        <TouchableOpacity key={product.id} style={styles.card} onPress={() => handleProductPress(product.id)}>
           <View style={{justifyContent: 'center', marginLeft: 20}}> 
           <Text>{product.name}</Text>
           </View>
           
        </TouchableOpacity>
      
      ))}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
  },
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  card: {
    borderRadius: 10,
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.5,
    elevation: 5,
  },
});