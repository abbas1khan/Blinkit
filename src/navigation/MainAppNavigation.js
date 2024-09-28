import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { isAndroid } from '../utils/Theme';
import SplashScreen from '../screens/SplashScreen';
import { navigationRef } from '../utils/NavigationUtil';
import CustomerLoginScreen from '../screens/CustomerLoginScreen';
import ProductDashboardScreen from '../screens/ProductDashboardScreen';
import ProductCategoriesScreen from '../screens/ProductCategoriesScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

const MainAppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName='SplashScreen'
                screenOptions={{
                    headerShown: false,
                    ...(isAndroid && { ...TransitionPresets.SlideFromRightIOS }),
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="CustomerLoginScreen" component={CustomerLoginScreen} options={{ ...TransitionPresets.DefaultTransition }} />
                <Stack.Screen name="ProductDashboardScreen" component={ProductDashboardScreen} options={{ ...TransitionPresets.DefaultTransition }} />
                <Stack.Screen name="ProductCategoriesScreen" component={ProductCategoriesScreen} />
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppNavigation

const styles = StyleSheet.create({})