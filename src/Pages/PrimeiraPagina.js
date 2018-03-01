/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import './PrimeiraPagina.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Input from '../Components/Input'
import Button from '../Components/Button'
import data from '../data.js';

export default class PrimeiraPagina extends React.Component {
    
    constructor() {
        super();
       
        this.state = {
            tempo: data.getTempo(),
            investimento: data.getInvestimento() ? data.getInvestimento() : 0,
            taxa: data.getTaxa()
        }
        this.mudarTempo = this.mudarTempo.bind(this);
        this.mudarInvestimento = this.mudarInvestimento.bind(this);
        this.mudarTaxa = this.mudarTaxa.bind(this);
    }

    mudarTempo(event) {
        
        let valor = event.target.value ? parseInt(event.target.value) : 0;
        if (valor > 50)
            valor = 50;

        this.setState({ tempo: valor });
        data.setTempo(valor);
    }

    mudarInvestimento(event) {
        const valor = event.target.value.replace(",",".");
        const numero = Number(valor);
        this.setState({ investimento: valor });
        data.setInvestimento(numero);
    }

    mudarTaxa(event) {
        //const aux = event.target.value ? Number(event.target.value.replace(",",".")) : 0;
        const valor = event.target.value.replace(",",".");
        const numero = Number(valor);
        this.setState({ taxa: valor });
        data.setTaxa(numero);
    }



    render() {
        return (
            <div>
                <Header />
                <div className="page-primeira-pagina">
                    <Input label="Prazo em anos ou meses" value={this.state.tempo} onChange={this.mudarTempo} />
                    <Input label="Investimento inicial (R$)" value={this.state.investimento} onChange={this.mudarInvestimento} />
                    <Input label="Taxa de juros %" value={this.state.taxa} onChange={this.mudarTaxa} />
                </div>
                <Footer>
                    <Button onClick={() => this.props.trocarPagina(0)}>Anterior</Button>
                    <Button onClick={() => this.props.trocarPagina(2)}>Próximo</Button>
                </Footer>
            </div>
        )
    }
}