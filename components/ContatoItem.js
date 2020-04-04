import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Cartao } from './Cartao';
import Medidas from '../Medidas/Medidas';

const ContatoItem = (props) => {
    return(
        <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
            <View style={styles.item}>
                <Cartao estilos={styles.cartao}>
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
        marginBottom: Medidas.margin10
    },
    cartao: {
        //300 pontos de largura
        width: Medidas.width300,
        maxWidth: Medidas.width100,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        
    },
});

export default ContatoItem;