
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

export type ProductItemCart = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  region: string;
  level: number;
  weight: number;
  description: string;
  quantity: number;
  flavor_profile: FlavorItem[];
  grind_option: OptionItem[];
  favorites: boolean
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
