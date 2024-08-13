import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { home_active, home, heart_active, heart, devices_active, devices } from '../svgImg';

import { colors } from '../constant';
import { hScale, scale } from 'utils/resolutions';

import HomeScreen from '../screens/home/HomeScreen';
import FavoriteCoffeeScreen from '../screens/favorite/FavoriteCoffeeScreen';
import NotificationScreen from '../screens/notify/NotificationScreen';
import { TabParamList } from '../lib/types';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: hScale(50),
                    borderTopWidth: 0,
                    shadowOpacity: 0,
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 0,
                    elevation: 0,
                    borderTopRightRadius: scale(30),
                    borderTopLeftRadius: scale(30),
                    backgroundColor:'#FAF0E6'
                },
                tabBarShowLabel: false,
                sceneContainerStyle: {
                    backgroundColor: colors.red,
                },
                tabBarActiveTintColor: colors.red,
                tabBarIcon: ({ focused }) => {
                    let iconToUse: string | null = null;

                    if (route.name === 'HomeScreen') {
                        iconToUse = focused ? home_active : home;
                    } else if (route.name === 'FavoriteCoffeeScreen') {
                        iconToUse = focused ? heart_active : heart;
                    } else if (route.name === 'NotificationScreen') {
                        iconToUse = focused ? devices_active : devices;
                    }

                    return (
                        <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                            <SvgXml
                                width="24"
                                height="24"
                                xml={iconToUse}
                                style={{ marginTop: 4 }}
                            />
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <Tab.Screen
                name='FavoriteCoffeeScreen'
                component={FavoriteCoffeeScreen}
            />
            <Tab.Screen
                name='NotificationScreen'
                component={NotificationScreen}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusedIconContainer: {
        marginTop: -hScale(30),
        width: hScale(48),
        height: hScale(48),
        borderRadius: hScale(24),
        backgroundColor: '#d29a69',
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopRightRadius: scale(30),
        // borderTopLeftRadius: scale(30),
    },
});

export default TabNavigator;
