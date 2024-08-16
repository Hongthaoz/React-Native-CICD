
interface FlavorItem {
  id: number;
  name: string
}
interface OptionItem {
  name: string
}

export type ProductItem = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  region: string;
  level: number;
  weight: number;
  description: string;
  flavor_profile: FlavorItem[];
  grind_option: OptionItem[];
}

// Kế thừa từ ProductItem những trường trên hoặc dùng Omit

// export type ProductItemCart = Omit<ProductItem, 'weight'> & {
//   quantity: number;
//   favorites: boolean;
// }

export type ProductItemCart = ProductItem & {
  quantity: number;
  favorites: boolean;
}

export type TabParamList = {
  HomeScreen: undefined;
  FavoriteCoffeeScreen: undefined;
  NotificationScreen: undefined;
  CartScreen: undefined;
};

export type RootStackParamList = {
  SplashScreen: undefined;
  TabNavigator: undefined;
  ProductDetailScreen: { item: ProductItem };
};
