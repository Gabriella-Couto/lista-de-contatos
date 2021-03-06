import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {View, TextInput, Button, StyleSheet, Platform, ScrollView} from 'react-native';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas';
import BotaoNavegacao from '../components/BotaoNavegacao';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { withNavigation } from 'react-navigation';
import * as ContatoActions from '../Store/ContatoAction';
import TiraFoto from './TiraFoto';
import CapturaLocalizacao from './CapturaLocalizacao';

const AdicionarContato = (props) => {
    const [nome, setNome] = useState ('');
    const [fone, setFone] = useState('');
    const dispatch = useDispatch();
    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const mudouNome = (nome) => {
        setNome (nome);
    }

    const mudouFone = (fone) => {
        setFone(fone);
    }

    function salvar(){
        var date = new Date();
        dispatch(ContatoActions.criarContato(nome, fone, imagemURI, date, "48.8566", "2.3522"));
        props.voltar();
    }


    return (
        <ScrollView> 
            <TiraFoto onFotoTirada={fotoTirada}/>
            <TextInput placeholder="Nome" value={nome} onChangeText={mudouNome}/>
            <TextInput style={styles.input} placeholder="Telefone" value={fone} onChangeText={mudouFone} keyboardType={'numeric'}/>
            <CapturaLocalizacao/>
            <View style={styles.buttons}> 
                <Button title="Salvar" onPress={salvar} color={Cores.primary}/>
                <Button title="Voltar" onPress={() => props.voltar()} color={Cores.gray}/>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    buttons: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    component: {
       backgroundColor: Cores.background 
    },
    input:{
        marginBottom: Medidas.margin15
    }
});

AdicionarContato.navigationOptions = dadosNav => {
    return {
    headerTitle: "Adicionar",
    headerRight:
    <HeaderButtons
    HeaderButtonComponent={BotaoNavegacao}>
    <Item
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => { dadosNav.navigation.navigate("Adicionar") }} />
    </HeaderButtons>
    }
}

export default withNavigation(AdicionarContato);