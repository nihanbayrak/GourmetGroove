import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://northwind.vercel.app/api/products/${productId}`)
      .then(response => response.json())
      .then(jsonResponse => setProduct(jsonResponse))
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      {product ? (
        <View style={styles.productContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{product.name}</Text>

          <Text style={styles.label}>Units in Stock:</Text>
          <Text style={styles.text}>{product.unitsInStock}</Text>

          <Text style={styles.label}>Price:</Text>
          <Text style={styles.text}>{product.unitPrice}</Text>

          <Text style={styles.label}>quantity Per Unit:</Text>
          <Text style={styles.text}>{product.quantityPerUnit}</Text>

          <Text style={styles.label}>Discounted:</Text>
          {product.discounted ? (
  <Text>{product.discounted} (Discounted)</Text>
) : (
  <Text >No Sale</Text>
)}
         




          

          {/* Add more product details here */}
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductDetail;
