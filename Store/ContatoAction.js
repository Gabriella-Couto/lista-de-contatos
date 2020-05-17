export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

export const listarContatos = () => {
    return async dispatch => {
        try {
            dispatch({ type: LISTA_CONTATOS, contatos: resultadoDB.rows._array });

        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}



export const criarContato = (id, nome, fone, imagem) => {
    console.log("Passou no action");
    return {type: ADD_CONTATO, contato: { id: id, nome: nome, fone: fone, imagem: imagem }}
}