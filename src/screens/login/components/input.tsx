import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { AppColor } from '../../../themes/app-colors';

export interface InputLoginProps {
    onChangeText(text: string):void;
    placeholder: string;
    icon: string;
    password?: boolean;
}

export function InputLogin (props: InputLoginProps) {
    return (
        <View style={styles.container}>
            <MaterialIcons name={props.icon} color={AppColor.primary} size={30} />
            <TextInput 
                onChangeText={props.onChangeText} 
                style={styles.textInput} 
                selectionColor={AppColor.primary2}
                underlineColorAndroid={AppColor.primary2}
                underlineColor="transparent"
                secureTextEntry={props.password}
                label={props.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 40,
        marginBottom:15,
        paddingHorizontal: 22,
        borderWidth: 1,
        borderColor: AppColor.primary,

        //Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    icon: {},
    textInput: {
        backgroundColor:'rgba(0,0,0,0)',
        flex: 1,
    }
});