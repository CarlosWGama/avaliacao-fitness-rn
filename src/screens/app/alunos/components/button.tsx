import * as React from 'react';
import { View, Text, Touchable, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export interface ButtonComponentProps {
    color: string;
    text: string;
    icon: string;
    onPress():void;
}

function ButtonComponent (props: ButtonComponentProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container, {backgroundColor:props.color}]}>
                <MaterialIcons style={{color:'white', fontSize: 30}} name={props.icon} />
                <Text style={{textAlign:'center', color:'white'}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export const Button = React.memo(ButtonComponent);

const styles = StyleSheet.create({
     container: {
        borderRadius: 20,
        height: 100,
        width: 100,
        padding: 10,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
     }
});