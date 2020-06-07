import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';
import ContatoAdd from './AdicionarContato';
import ContatoItem from './ContatoItem';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas';
import ExibirContato from './ExibirContato';
import EditarContato from  './EditarContato';
import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import * as ContatosAction from '../Store/ContatoAction';

const Home = ({navigation}) => {
  const [modoAdd, setModoAdd] = useState(false);
  const [contatoSelecionado, setContatoSelecionado] = useState({});
  const [modoEdit, setModoEdit] = useState(false);
  const [modoView, setModoView] = useState(false);
  const lista_contatos = useSelector(estado => estado.contatos.contatos);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(ContatosAction.listarContatos())
  }, [dispatch]);

  function handleBack(){
    setModoAdd(false);
    setModoEdit(false);
    setModoView(false);
  }


  function handleAddClick(){
    setModoAdd(true);
  }
 
  const exibir = (key) => {
    let filteredContato = lista_contatos.filter((c) => {return c.id == key });
    setContatoSelecionado(filteredContato[0]);
    setModoView(true);
    setModoAdd(false);
    setModoEdit(false);
  }

  const handleEditClick = () => {
    setModoEdit(true);
    setModoView(false);
  }
  
  return (
    <View style={styles.container}>
      {modoAdd == false && modoEdit == false && modoView == false &&
        <View>
          <Text style={styles.title}>Lista de contatos</Text>
          {lista_contatos && lista_contatos.length > 0? 
            <FlatList
              data={lista_contatos}
              renderItem={
              contato => (
              <ContatoItem
                id={contato.item.id}
                nome={contato.item.nome}
                fone={contato.item.fone}
                imagem={contato.item.imagemUri}
                lat={contato.item.lat}
                long={contato.item.long}
                onClick={exibir}
              />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            :
            null
          }
          <Button title="Adicionar contato" color={Cores.primary} onPress={() => {handleAddClick()}} />
      </View>
      }
      {modoAdd == true &&
        <ContatoAdd voltar={handleBack}/>
      }
      {modoView ==true&&
          <ExibirContato id={contatoSelecionado.id} nome={contatoSelecionado.nome} fone={contatoSelecionado.fone} imagem={contatoSelecionado.imagem} lat={contatoSelecionado.lat} long={contatoSelecionado.long} data={contatoSelecionado.data} voltar={handleBack} handleEdit={handleEditClick}/>
      }
      {modoEdit == true &&
        <EditarContato id={contatoSelecionado.id} nome={contatoSelecionado.nome} fone={contatoSelecionado.fone} imagem={contatoSelecionado.imagem} voltar={handleBack} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Medidas.flex1,
    backgroundColor: Cores.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    fontWeight: 'bold',
    marginBottom: Medidas.margin10,
    color: Cores.primary
  },
  title: {
    color: Cores.primary,
    fontSize: Medidas.font24,
    fontWeight: 'bold',
    marginTop: Medidas.margin15,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: Medidas.margin6,
    width: Medidas.width100
  },
  displayFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default withNavigation(Home);