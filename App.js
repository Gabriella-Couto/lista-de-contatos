import React, { useState } from 'react';
import Navigation  from './Navigation/Navigation';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Navigation/>
    );
  }
}

export default App;


