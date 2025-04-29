import { API_BASE_URL, API_ENDPOINTS } from '../config/api';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
    capacity: number;
  };
}

export const productService = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRODUCTS.LIST}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des produits');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async getProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRODUCTS.DETAIL.replace(':id', id.toString())}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du produit');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
}; 