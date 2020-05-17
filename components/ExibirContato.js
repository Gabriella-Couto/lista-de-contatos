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
            <View style={styles.displayFlex}>
                <Text style={styles.tableHeader}>Id</Text>
                <Text style={styles.tableHeader}>Nome</Text>
                <Text style={styles.tableHeader}>Telefone</Text>
            </View>
            <View >
                <Cartao style={styles.displayFlex}>
                    <Image style={styles.imagem} source={{ uri: props.imagem }} />
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
    item: {
        backgroundColor: Cores.background,
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginBottom: Medidas.margin10,
        marginTop: 10
    },
    cartao: {
        width: Medidas.width300,
        maxWidth: Medidas.width100,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
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
