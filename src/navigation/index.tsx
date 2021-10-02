import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login';
import { AppNavigation } from './app';

export type MainNavigationParams = {
    login: undefined;
    app: undefined;
};

const Stack = createNativeStackNavigator<MainNavigationParams>();

export const MainNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="app" component={AppNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
)