import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Cores from '../Cores/Cores'
import Mapa from './Mapa';
import { AsyncStorage } from 'react-native';

const CapturaLocalizacao = (props) => {

    const [estaCapturando, setEstaCapturando] = useState(false);
    const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState();

    const capturarLocalizacao = async () => {
        const temPermissao = await verificarPermissoes();
        if (temPermissao) {
            setEstaCapturando(true);
            try {
                const localizacao = await Location.getCurrentPositionAsync({ timeout: 8000 });
                setLocalizacaoSelecionada({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                });

                // await AsyncStorage.setItem('local', JSON.stringify(localizacao), (err, result) => {
                //     console.log("ADICI", result);
                // });
            }
            catch (err) {
                Alert.alert(
                    'Impossível obter localização',
                    'Tente novamente mais tarde ou escolha do mapa',
                    [{ text: "OK" }]
                )
            }
            setEstaCapturando(false);
        }
    }

    const verificarPermissoes = async () => {
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        if (resultado.status !== "granted") {
            Alert.alert(
                'Sem permissão',
                'É preciso liberar acesso ao mecanismo de localização',
                [{ text: "OK" }]
            );
            return false;
        }
        return true;
    }

    return (
        <View style={estilos.capturaLocalizacao}>
            <Mapa
                style={estilos.previewDoMapa}
                localizacao={localizacaoSelecionada}>
                {
                    estaCapturando
                        ?
                        <ActivityIndicator
                            size="large"
                            color={Cores.primary} />
                        :
                        <Text>Nenhuma localização disponível.</Text>
                }
            </Mapa>
            <Button
                title="Obter localização"
                color={Cores.primary}
                onPress={capturarLocalizacao} />
        </View>
    );
}

const estilos = StyleSheet.create({
    capturaLocalizacao: {
        marginBottom: 15
    },
    previewDoMapa: {
        marginBottom: 10,
        width: '100%',
        height: 400,
        borderColor: '#DDD',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CapturaLocalizacao;