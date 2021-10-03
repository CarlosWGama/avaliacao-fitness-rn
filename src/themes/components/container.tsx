import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColor } from '../app-colors';

export interface AppContainerProps {
    children:any;
    title: string;
}

export function AppContainer (props: AppContainerProps) {
    return (
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
            <Text style={{color:'white', fontSize: 20}}>{props.title}</Text>
        </View>
        <View style={{backgroundColor:AppColor.primary, height: 30}}>
            <View style={{backgroundColor:AppColor.background, flex: 1, borderTopLeftRadius: 30}} />
        </View>
        
        {/* MAIN */}
        <View style={{flex:1, padding: 20, marginTop: -30}}>
         {props.children}

        </View>

        {/* FOOTER */}
        <View style={{backgroundColor:AppColor.primary, height: 30}}>
            <View style={{backgroundColor:AppColor.background, flex: 1, borderBottomRightRadius: 30}} />
        </View>
        <View style={styles.footer} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: AppColor.primary,
        borderBottomRightRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    footer: {
        height: 20,
        backgroundColor: AppColor.primary,
        borderTopLeftRadius: 50
    }
});