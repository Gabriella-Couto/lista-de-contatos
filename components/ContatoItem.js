import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ContatoItem = (props) => {
    return(
        <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
           <View style={styles.item}>
                <Text>{props.nome}</Text>
                <Text>{props.fone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    item: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 10
    }
});

export default ContatoItem;