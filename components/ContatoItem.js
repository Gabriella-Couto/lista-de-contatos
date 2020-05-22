import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Keyboard, Platform, Image} from 'react-native';
import { Cartao } from './Cartao';
import Medidas from '../Medidas/Medidas';
import { withNavigation } from 'react-navigation';
import BotaoNavegacao from '../components/BotaoNavegacao';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Cores from '../Cores/Cores';

const ContatoItem = (props) => {

    const confirmaExclusao = () => {
        Alert.alert(
            'Deletar contato',
            'Tem certeza que deseja excluir esse item?', //mensagem
            //coleção de botões, cada botão é um JSON
            [
                {text: 'Deletar', style: 'default', onPress: () => props.onDelete(props.id)},
                {text: 'Cancelar', style: 'default', onPress:  Keyboard.dismiss()},
            ]
        );
       
    }

    return(
        <TouchableOpacity onPress={() => props.onClick(props.id)} onLongPress={confirmaExclusao}>
            <View style={styles.item}>
                <Cartao estilos={styles.cartao}>
                    <Image style={styles.imagem} source={{ uri: props.imagem }} />
                    <Text>{props.nome}</Text>
                    <Text>{props.fone}</Text>
                </Cartao>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create ({
    item: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginBottom: Medidas.margin10,
        marginTop: 10
    },
    cartao: {
        //300 pontos de largura
        width: Medidas.width300,
        maxWidth: Medidas.width100,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        textAlignVertical: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Cores.primary,
        borderWidth: 1
    }
});

export default withNavigation(ContatoItem);