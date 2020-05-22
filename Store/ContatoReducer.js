import { ADD_CONTATO, LISTA_CONTATOS, EDITAR_CONTATO } from './ContatoAction';
import Contato from '../Modelos/Contato';

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato(action.contato.id.toString(), action.contato.nome, action.contato.fone, action.contato.imagem);
            return {
                contatos: estado.contatos.concat(contato)
            };
        case LISTA_CONTATOS:
            return {
                contatos: action.contatos.map(c => new Contato(c.id, c.nome, c.fone, c.imagem))
            };
        case EDITAR_CONTATO: 
            let removedArray = estado.contatos.filter((c) => {return c.id != action.contato.id.toString() });
            estado.contatos = removedArray;
            
            const novoContato = new Contato(action.contato.id.toString(), action.contato.nome, action.contato.fone, action.contato.imagem);
            return {
                contatos: estado.contatos.concat(novoContato)
            };
        default:
            return estado;
    }
}

