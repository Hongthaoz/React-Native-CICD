import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "../screens/splash/SplashScreen";
import TabNavigator from "./TabNavigator";
import { RootStackParamList } from '../lib/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'SplashScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                animation: 'slide_from_right',
            }}>
            <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
        </Stack.Navigator>
    );
}

export {
    MainStackNavigator,
};
