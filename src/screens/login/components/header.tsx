import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppColor } from '../../../themes/app-colors';

export interface HeaderLoginProps {
}

export function HeaderLogin (props: HeaderLoginProps) {
    return (
        <LinearGradient style={styles.container} colors={[AppColor.primary, AppColor.primary2]}>
            <Text style={styles.text}>LOGIN</Text>
            <Image source={require('./../../../assets/halteres2.png')} style={{width:100, height: 100}} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300, 
        width: '100%',
        borderBottomLeftRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',

        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        color:'white',
        fontSize: 30
    }
});
