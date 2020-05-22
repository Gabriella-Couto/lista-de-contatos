import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Button, Image} from 'react-native';
import { Cartao } from './Cartao';
import Medidas from '../Medidas/Medidas';
import Cores from '../Cores/Cores';
import { withNavigation } from 'react-navigation';
import BotaoNavegacao from './BotaoNavegacao';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const ExibirContato = (props) => {
   
    return(
        <View>
            <Image style={styles.imagem} source={{ uri: props.imagem }} />
            <View style={styles.displayFlex}>
                <Text style={styles.tableHeader}>Id</Text>
                <Text style={styles.tableHeader}>Nome</Text>
                <Text style={styles.tableHeader}>Telefone</Text>
            </View>
            <View >
                <Cartao style={styles.displayFlex} estilos={styles.displayFlex}>
                    <Text>{props.id}</Text>
                    <Text>{props.nome}</Text>
                    <Text>{props.fone}</Text>
                </Cartao>
            </View>
            <View style={styles.buttons}> 
                <Button title="Voltar" onPress={() => props.voltar()} color={Cores.gray}></Button>
                <Button title="Editar contato" onPress={() => props.handleEdit()} color={Cores.primary}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    cartao: {
        width: Medidas.width300,
        maxWidth: Medidas.width300,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        textAlignVertical: 'center',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: Medidas.margin15
    },
    tableHeader: {
        fontWeight: 'bold',
        marginBottom: Medidas.margin10,
        color: Cores.primary
    },
    displayFlex: {
        width: Medidas.width300,
        maxWidth: Medidas.width100,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        textAlignVertical: 'center'
    },
    imagem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Medidas.image230,
        height: Medidas.image230,
        borderRadius: Medidas.radius150,
        backgroundColor: '#ccc',
        borderColor: Cores.primary,
        borderWidth: 1,
        marginBottom: Medidas.margin15,
        alignSelf: 'center'
    }
});


ExibirContato.navigationOptions = dadosNav => {
    return {
    headerTitle: "Exibir o contato",
    headerRight:
    <HeaderButtons
    HeaderButtonComponent={BotaoNavegacao}>
    <Item
        title="Exibir"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => { dadosNav.navigation.navigate("Exibir") }} />
    </HeaderButtons>
    }
}

export default withNavigation(ExibirContato);
