/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import './PaginaInicial.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import data from '../data.js';
import Login from '../Components/Login'

export default class PrimeiraPagina extends React.Component {
    
    constructor() {
        super();
    }



    render() {
        return (
            <div>
                <Header />
                    <b className="titulo">
                        AgroRetorno
                    </b>
                    <div>
                        <Login />
                    </div>

                <div>
                    <input className="personalizacaoButton" type="button" onClick={() => this.props.trocarPagina(1)} value="Calcular Viabilidade"></input>
                </div>
            </div>
        )
    }
}