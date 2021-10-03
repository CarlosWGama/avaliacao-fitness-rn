import moment from 'moment';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Aluno } from '../../../../models/aluno';

export interface CardProps {
    aluno: Aluno;
}

function CardComponent(props: CardProps) {
    const {aluno} = props; 
    console.log(aluno)
    console.log(moment(aluno.data_avaliacao).format('DD/MM/YYYY'));
    return (
      <View style={styles.container}>
         <Text style={{fontWeight:'bold'}}>{aluno.nome}</Text>
         <View style={{flexDirection:'row', marginTop: 5, justifyContent:'space-around'}}>
            <View>
                <Text style={{fontWeight: 'bold'}}>Última Avaliação:</Text>
                <Text style={{textAlign:'center'}}>{moment(aluno.data_avaliacao).format('DD/MM/YYYY')}</Text>
            </View>
            <View>
                <Text style={{fontWeight: 'bold'}}>Treinado</Text>
                <Text style={{textAlign:'center', color: (aluno.treinado ? 'green' : 'tomato')}}>{aluno.treinado ? 'Sim' : 'Não'}</Text>
            </View>
         </View>
      </View>
    );
}

export const Card = React.memo(CardComponent)

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'white',
        height: 100,
        padding: 20,
        marginTop: 10,
    }
});