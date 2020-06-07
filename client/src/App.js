import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import HeaderBoot from './bootstrap/HeaderBoot';
import SidebarBoot from './bootstrap/SidebarBoot';
import ContentBoot from './bootstrap/ContentBoot';
import FooterBoot from './bootstrap/FooterBoot';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      resultado: []
    }

    axios
      .get('/postagens')
      .then(resultado => {
        console.log(resultado)
        this.setState({
          resultado: resultado.data[0]
        })
      })

    axios
      .get('/comentarios/teste')
      .then(resultado => {
        console.log(resultado)
      })
  }
  render(){
    return (
      <div className="App">
        <HeaderBoot />
        <SidebarBoot />
        <ContentBoot posts={this.state.resultado}/>
        <FooterBoot />
      </div>
    );
  }
}

export default App;