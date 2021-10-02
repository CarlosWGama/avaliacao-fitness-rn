import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AppColor } from '../../../themes/app-colors';

export interface ButtonLoginProps {
    text: string;
    onPress():void;
}

export function ButtonLogin (props: ButtonLoginProps) {
    return (
        <Pressable onPress={props.onPress}>
            <LinearGradient colors={[AppColor.primary, AppColor.primary2]} style={styles.container}>
                <Text style={{color:'white'}}>{props.text}</Text>
            </LinearGradient>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',

        //shadown
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});