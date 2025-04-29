import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Products: undefined;
  ProductDetail: { productId: number };
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>; 