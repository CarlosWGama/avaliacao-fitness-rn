import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PerfilScreen } from '../screens/app/perfil';
import { AppColor } from '../themes/app-colors';
import { MaterialIcons } from '@expo/vector-icons';
import { AlunosScreen } from '../screens/app/alunos';

export type AppNavParams = {
    'alunos': undefined,
    'avaliacoes': undefined,
    'perfil': undefined,
}

const Tab = createMaterialBottomTabNavigator<AppNavParams>();

export const AppNavigation = () => (
    <Tab.Navigator barStyle={{backgroundColor:AppColor.primary}}>
        <Tab.Screen name="alunos" component={AlunosScreen} options={{
            tabBarLabel: 'Alunos',
            tabBarIcon: (tab) => <MaterialIcons name="people" color={(tab.focused ? 'white' : '#CDC8B1')} size={(tab.focused ? 25 : 15)}/>
        }} />
        <Tab.Screen name="avaliacoes" component={PerfilScreen} options={{
            tabBarLabel: 'Avaliações',
            tabBarIcon: (tab) => <MaterialIcons name="analytics" color={(tab.focused ? 'white' : '#CDC8B1')} size={(tab.focused ? 25 : 15)}/>
        }} />
        <Tab.Screen name="perfil" component={PerfilScreen} options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: (tab) => <MaterialIcons name="person" color={(tab.focused ? 'white' : '#CDC8B1')} size={(tab.focused ? 25 : 15)}/>
        }} />
    </Tab.Navigator>
)

