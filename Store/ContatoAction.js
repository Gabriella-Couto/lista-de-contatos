import * as FileSystem from 'expo-file-system'
import { inserirContato, buscarContato, editarContato, excluirContato } from '../helpers/Database';

export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';
export const EDITAR_CONTATO = "EDITAR_CONTATO";
export const DELETAR_CONTATO = 'DELETAR_CONTATO';

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContato();
            dispatch({ type: LISTA_CONTATOS, contatos: resultadoDB.rows._array })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const atualizarContato = (id, nome, fone, imagem, data, latitude, longitude) => {
    return async dispatch => {
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
    
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })
            const resultadoDB = await editarContato(
                id,
                nome,
                fone,
                novoPath,
                data,
                latitude,
                longitude
            )

            dispatch({ 
                type: EDITAR_CONTATO, 
                contato: { id: id, nome: nome, fone: fone, imagem: novoPath, data: data, lat: latitude, long: longitude } 
            })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const deletarContato = (id) => {
    return async dispatch => {
        try {
            const resultadoDB = await excluirContato(id);
            dispatch({ type: DELETAR_CONTATO, contato: {id: id} })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const criarContato  = (nome, fone, imagem, data, latitude, longitude) => {
    return async dispatch => {
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
    
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })
            const resultadoDB = await inserirContato(
                nome,
                fone,
                novoPath,
                data
            )

            dispatch({ 
                type: ADD_CONTATO, 
                contato: { id: resultadoDB.insertId, nome: nome, fone: fone, imagem: novoPath, data: data, lat: latitude, long: longitude } })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}