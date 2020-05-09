import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { Cartao } from './Cartao';
import Medidas from '../Medidas/Medidas';
import Cores from '../Cores/Cores';
import { withNavigation } from 'react-navigation';

const ExibirContato = ({navigation, props}) => {
   
    return(
        <View>
            <View style={styles.displayFlex}>
                <Text style={styles.tableHeader}>Id</Text>
                <Text style={styles.tableHeader}>Nome</Text>
                <Text style={styles.tableHeader}>Telefone</Text>
            </View>
            <View >
                <Cartao style={styles.displayFlex}>
                    <Text>{props.chave}</Text>
                    <Text>{props.nome}</Text>
                    <Text>{props.fone}</Text>
                </Cartao>
            </View>
            <View style={styles.buttons}> 
                <Button title="Voltar" onPress={() => navigation.navigation('Home')} color={Cores.gray}></Button>
                <Button title="Editar contato" onPress={() => props.handleEdit()} color={Cores.primary}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    item: {
        backgroundColor: Cores.background,
    },
    cartao: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around'
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
