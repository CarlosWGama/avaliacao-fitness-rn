import React from 'react';
import { StatusBar, View } from 'react-native';
import { MainNavigation } from './src/navigation';
import { LoginScreen } from './src/screens/login';

export default function App() {
  return (
    <View style={{flex:1}}>
      <MainNavigation/>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
    </View>
  );
}
