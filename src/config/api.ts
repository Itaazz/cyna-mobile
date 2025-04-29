export const API_BASE_URL = 'http://172.21.176.1:/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/users/login',
    REGISTER: '/users/register',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAIL: '/products/:id',
  },
  CART: {
    GET: '/cart',
    ADD: '/cart/add',
    UPDATE: '/cart/update',
    REMOVE: '/cart/remove',
  },
  ORDERS: {
    LIST: '/orders',
    CREATE: '/orders/create',
    DETAIL: '/orders/:id',
  },
  SUBSCRIPTIONS: {
    LIST: '/subscriptions',
    CREATE: '/subscriptions/create',
    CANCEL: '/subscriptions/cancel',
  },
}; 