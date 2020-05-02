import { createStackNavigator } from '@react-navigation/native';
import { Platform } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation'
import AdicionarContato from '../components/AdicionarContato';
import EditarContato from '../components/EditarContato';
import ExibirContato from '../components/ExibirContato';
import ContatoItem from '../components/ContatoItem';
import Cores from '../Cores/Cores';
import App from '../App';

const Navigation  = createStackNavigator({
    Criar: AdicionarContato,
    Editar: EditarContato,
    Item: ContatoItem,
    Exibir: ExibirContato,
    Home: App
}, { defaultNavigationOptions: {
        headerStyle: {
        backGroundColor: Platform.OS === 'android' ? Cores.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
    }
});

export default createAppContainer(Navigation);