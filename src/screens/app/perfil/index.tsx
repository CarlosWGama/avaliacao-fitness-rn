import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { useNavigation } from '@react-navigation/core';
import { MainNavigationParams } from '../../../navigation';
export interface PerfilScreenProps {
}

export function PerfilScreen (props: PerfilScreenProps) {
    
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams, "app">>()
  
  return (
      <View>
          <Text>PerfilScreen</Text>
          <Button title="Deslogar" onPress={() => navigation.navigate("login")} />
      </View>
    );
}
