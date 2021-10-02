import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ToastAndroid } from 'react-native';
import { ENV } from '../../../env';
import { CONFIG } from '../../config';
import { AppColor } from '../../themes/app-colors';
import { HeaderLogin, InputLogin, ButtonLogin } from './components';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavigationParams } from '../../navigation';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {  
    
    const [ error, setError ] = React.useState<false|string>(false);
    const nav = useNavigation<NativeStackNavigationProp<MainNavigationParams, "login">>();

    //Funções
    const logar = async ({email, senha}) => {
      setError(false);

      await new Promise((resolve, error) => setTimeout(() => resolve(''), 2000))
      if (email == 'teste@teste.com' && senha == '123456') {
        nav.navigate('app');
      } else {
        ToastAndroid.show('Login ou senha incorreta', ToastAndroid.LONG);
      }
    }

    return (
      <View style={styles.container}>
          <HeaderLogin/>

          {/* MAIN */}
          <Formik
            initialValues={{email:'', senha: ''}}
            onSubmit={logar}
          >
            {({handleChange, handleSubmit, isSubmitting}) => (
              <View style={styles.main}>
                <InputLogin icon="email" onChangeText={handleChange('email')} placeholder="Email"/>
                <InputLogin icon="lock"  onChangeText={handleChange('senha')} placeholder="Senha" password/>

                { !isSubmitting && <ButtonLogin text="Logar" onPress={handleSubmit}/>}
                { isSubmitting && <ActivityIndicator color={AppColor.primary} size={50} />}
              </View>
            )}
          </Formik>

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text>CarlosWGama</Text>
            <Text>Versão {CONFIG.version}</Text>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:AppColor.background,
    
  },
  main: {padding:20, flex:1, justifyContent:'center'},
  footer: {padding:10, flexDirection:'row', justifyContent:'space-between' }
});
