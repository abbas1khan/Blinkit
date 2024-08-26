import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { isAndroid } from '../utils/Theme';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import { navigationRef } from '../utils/NavigationUtil';
import CustomerLoginScreen from '../screens/CustomerLoginScreen';

const Stack = createStackNavigator();

const MainAppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName='SplashScreen'
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...(isAndroid && { ...TransitionPresets.SlideFromRightIOS }),
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="CustomerLoginScreen" component={CustomerLoginScreen} options={{ ...TransitionPresets.DefaultTransition }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ ...TransitionPresets.DefaultTransition }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppNavigation

const styles = StyleSheet.create({})