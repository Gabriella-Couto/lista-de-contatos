import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ContatoAdd from './components/AdicionarContato';
import ContatoItem from './components/ContatoItem';
import Cores from './Cores/Cores';
import Medidas from './Medidas/Medidas';

export default function App() {
  const [contato, setContato] = useState ([]);
  const [modoAdd, setModoAdd] = useState(false);

  function handleBack(){
    setModoAdd(false);
  }

  const handleSaveClick = (nome, fone) => {
    let id = calculateIndex();
    //Add the current contact in the end of the array
    setContato(contato => {
      return [...contato, {id: id, nome: nome, fone: fone}];
    })
  }

  function handleAddClick(){
    setModoAdd(true);
  }

  function calculateIndex(){
    if(contato.length == 0 ){
      return 10;
    } else{
      let ultimoContato = contato[contato.length - 1];
      return ultimoContato.id + 2;
    }
  }

  const removerContato = (key) => {
    //Returns all array elements that are not the one i want to delete 
    //And then changes the value of the array
    let filteredContato = contato.filter((c) => {return c.id != key });
    setContato(filteredContato);
  }

  return (
    <View style={styles.container}>
      {modoAdd == true?
          <View> 
              <ContatoAdd handleSaveClick={handleSaveClick} handleBack={handleBack}/>
          </View>
          :
          <View>
            <Text style={styles.title}>Lista de contatos</Text>
            <View style={styles.displayFlex}>
              <Text style={styles.tableHeader}>Nome</Text>
              <Text style={styles.tableHeader}>Telefone</Text>
            </View>
            {contato && contato.length > 0? 
              <FlatList
                data={contato}
                renderItem={
                contato => (
                <ContatoItem
                  chave={contato.item.id}
                  nome={contato.item.nome}
                  fone={contato.item.fone}
                  onDelete={removerContato}
                />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
              :
              null
            }
            <Button title="Adicionar contato" color={Cores.primary} onPress={handleAddClick}/>
          </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
