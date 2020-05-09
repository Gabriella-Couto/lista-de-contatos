import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import AdicionarContato from '../components/AdicionarContato';
import EditarContato from '../components/EditarContato';
import ExibirContato from '../components/ExibirContato';
import ContatoItem from '../components/ContatoItem';
import Home from '../components/Home';
import Cores from '../Cores/Cores';

const Navigation = createStackNavigator({
    Home: Home,
    Criar: AdicionarContato,
    Editar: EditarContato,
    Item: ContatoItem,
    Exibir: ExibirContato
}, { defaultNavigationOptions: {
        headerStyle: {
        backGroundColor: Platform.OS === 'android' ? Cores.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? Cores.primary : Cores.primary
    }
});

export default createAppContainer(Navigation);