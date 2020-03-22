import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component{
  
  constructor (props){
    super (props);
      this.state = {
      contato: [],
      showAdd: false,
      fone: '',
      nome: ''
    }
  }

  handleBack(){
    this.setState({
      fone: '',
      nome: '',
      showAdd: false
    })
  }

  handleAddClick(){
    this.setState({
      showAdd: true
    })
  }

  handleSaveClick(){
    let nome = this.state.nome;
    let fone = this.state.fone;
    let id = this.calculateIndex();

    console.log('id', id)

    this.setState({ 
      contato: [...this.state.contato, {name: nome, fone: fone, id: id}],
      fone: '',
      nome: ''
    })

  }

  handleFoneChange(e){
    let fone = e.target.value;

    this.setState({
      fone: fone
    })
  }

  handleNameChange(e){
    let name = e.target.value;
   
    this.setState({
      nome: name
    })
  }

  calculateIndex(){
    if(this.state.contato.length == 0 ){
      return 10
    } else{
      let ultimoContato = this.state.contato[this.state.contato.length -1];
      return ultimoContato.id + 2;
    }
  }

  
  render(){
    const index = 10;

    return (
      <View style={styles.container}>
        {this.state.showAdd == true?
            <View> 
              <TextInput placeholder="Nome" value={this.state.nome} onChangeText={(nome) => this.setState({nome})}/>
              <TextInput placeholder="Telefone" value={this.state.fone} onChangeText={(fone) => this.setState({fone})}/>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}> 
                <Button title="Salvar" onPress={() => this.handleSaveClick()} color="#6ac47b"/>
                <Button title="Voltar" onPress={() => this.handleBack()} color="#8c8f91"/>
              </View>
            </View>
            :
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lista de contatos</Text>
              <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{display: 'flex'}}>Nome</Text>
                <Text style={{display: 'flex'}}>Telefone</Text>
              </View>
              { this.state.contato && this.state.contato.length > 0? 
                
                    <FlatList
                      data={this.state.contato}
                      renderItem={contato => (
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text>{contato.item.name}</Text>
                          <Text>{contato.item.fone}</Text>
                        </View>
                      )}
                      keyExtractor={(item) => item.id.toString()}
                    />
                :
                null

              }
              <Button title="Adicionar contato" onPress={() => this.handleAddClick()} style={{ marginBottom: 25}}/>
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
