/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React, { Component } from 'react'
import './App.css'
import PaginaInicial from './Pages/PaginaInicial'
import PrimeiraPagina from './Pages/PrimeiraPagina'
import SegundaPagina from './Pages/SegundaPagina'
import TerceiraPagina from './Pages/TerceiraPagina'

const paginas = [PaginaInicial, PrimeiraPagina, SegundaPagina, TerceiraPagina]

class App extends Component {

  constructor() {
    super()

    this.state = {pagina: 0}
  }

  render() {
    const Pagina = paginas[this.state.pagina]
    
    return <Pagina trocarPagina={pag => this.setState({pagina: pag})} />    
  }
}

export default App
