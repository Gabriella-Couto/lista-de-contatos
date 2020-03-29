import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AdicionarContato = (props) => {
    const [nome, setNome] = useState ('');
    const [fone, setFone] = useState('');

    const mudouNome = (nome) => {
        setNome (nome);
    }

    const mudouFone = (fone) => {
        setFone(fone);
    }

    function limpaEnvia(){
        props.handleSaveClick(nome, fone);
        setFone('');
        setNome('');
    }

    const clean = () => {
        setFone('');
        setNome('');
    }

    return (
        <View> 
            <TextInput placeholder="Nome" value={nome} onChangeText={mudouNome}/>
            <TextInput placeholder="Telefone" value={fone} onChangeText={mudouFone}/>
            <View style={styles.buttons}> 
                <Button title="Salvar" onPress={limpaEnvia} color="#6ac47b"/>
                <Button title="Voltar" onPress={() => props.handleBack()} color="#8c8f91"/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    buttons: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }
});



export default AdicionarContato;