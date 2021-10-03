import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Aluno } from '../../../models/aluno';
import { AppContainer } from '../../../themes/components';
import { Button, Card } from './components';

export interface AlunosScreenProps {
}

export function AlunosScreen (props: AlunosScreenProps) {

    const [ alunoSelecionado, setAlunoSelecionado ] = React.useState<Aluno|null>(null);
    const [alunos, setAlunos] = React.useState<Aluno[]>([
        {id: '', nome: 'Carlos Alberto Correia Lessa Filho', celular: '', data_avaliacao: '2021-10-14', data_nascimento: '1990-11-28', endereco: '', formacao: '', sexo:'masculino', telefone: '', treinado: false},
        {id: '1', nome: 'Maria Jose', celular: '', data_avaliacao: '2021-10-14', data_nascimento: '1990-11-28', endereco: '', formacao: '', sexo:'masculino', telefone: '', treinado: true},
    ]);

    const modalizeRef = React.useRef<Modalize>(null)

    const openModal = (aluno:Aluno) => {
        setAlunoSelecionado(aluno);
        modalizeRef.current?.open()
    }

    return (
        <View style={{flex: 1}}>
            <AppContainer title="Seus Alunos">
                {/* <Text style={styles.title}>Seus Alunos</Text> */}

                <FlatList 
                    data={alunos}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => openModal(item)}>
                            <Card aluno={item} />
                        </TouchableOpacity>
                    )}      
                />
            </AppContainer>

            <Modalize ref={modalizeRef} modalTopOffset={200} modalStyle={{marginHorizontal:10, padding: 20}}> 
                    {alunoSelecionado && <Text style={styles.modalText}>{alunoSelecionado.nome}</Text>}
                    <View style={styles.modal}>
                        <Button text="Perfil" icon="person" color="#32CD32" onPress={() => console.log('clicou')} />
                        <Button text="Avaliações" icon="assignment" color="#FFD700" onPress={() => console.log('clicou')} />
                        <Button text="Editar Perfil" icon="edit" color="#483D8B" onPress={() => console.log('clicou')} />
                        <Button text="Remover" icon="delete" color="tomato" onPress={() => console.log('clicou')} />
                    
                    </View>
            </Modalize>

        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 20, textAlign: 'center'},
    modalText: {textAlign:'center', fontWeight: 'bold'},
    modal: {
        flex:1, 
        flexDirection: 'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
    }
});
