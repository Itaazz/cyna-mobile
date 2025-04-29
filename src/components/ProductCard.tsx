import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../services/productService';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(product)}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.category}>{product.category.name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{product.price} €</Text>
          <Text style={styles.quantity}>
            Quantité: {product.category.capacity}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#ff6b6b',
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#e0e0e0',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
  quantity: {
    fontSize: 14,
    color: '#e0e0e0',
  },
}); 