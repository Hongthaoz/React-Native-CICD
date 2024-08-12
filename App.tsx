import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import SingleMeal from "./src/screens/SingleMeal";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import { RootStackParamList } from "./src/lib/types";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { store } from "./src/store/redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#000000",
        sceneContainerStyle: { backgroundColor: "#FFFFFF" },
        drawerContentStyle: { backgroundColor: "#F0FFF0" },
        drawerActiveTintColor: "#8B7765",
        drawerInactiveTintColor: "#8B7765",
        drawerActiveBackgroundColor: "#C1CDC1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Menus",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                },
                headerTintColor: "#000000",
                contentStyle: { backgroundColor: "#FFFFFF" },
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />
              <Stack.Screen name="SingleMeal" component={SingleMeal} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView >
      </Provider>
    </>
  );
}

export default App;
