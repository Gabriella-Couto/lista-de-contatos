import { ADD_CONTATO } from './ContatoAction';
import Contato from '../Modelos/Contato';

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato(action.contato.id, action.contato.nome, action.contato.fone, action.contato.imagem);
            console.log("@contato reducer", JSON.stringify(contato))
            return {
                contatos: estado.contatos.concat(contato)
            };
        default:
            return estado;
    }
}

