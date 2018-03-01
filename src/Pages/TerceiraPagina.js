/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from  'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Inviavel from 'material-ui-icons/ThumbDown'
import Viavel from 'material-ui-icons/ThumbUp'
import './TerceiraPagina.css'
import data from '../data'
import { calcularValores } from '../calc/funcoes'
import jsPDF from 'jspdf'
import { salvar } from '../print'

export default class TerceiraPagina extends React.Component {
    
    constructor() {
        super();

        this.state = {
            custos: data.getCustos(),
            receitas: data.getReceitas(),
            taxa: data.getTaxa(),
            tempo: data.getTempo(),
            investimento: data.getInvestimento()
        }; 
    }
    
    render() {
        const { taxa, receitas, custos, investimento, tempo } = this.state;
        const { vpl, il, tir } = calcularValores(tempo, receitas, custos, taxa, investimento);

        return (
            <div>
                <Header />
                <div className="page-terceira-pagina">
                    <Input label="Valor Presente Líquido (VPL)" value={vpl ? "R$ "+vpl.toFixed(6) : '?' } readOnly />
                    <Input label="Índice de Lucratividade (IL)" value={il ? il.toFixed(6)+" %" : '?' } readOnly />
                    <Input label="Taxa Interna de Retorno (TIR)" value={tir ? tir.toFixed(6)+" %" : '?' } readOnly />
                    {vpl.toFixed(6) > 0 ? <div><Viavel /><p>Viável</p></div> : <div><Inviavel /><p>Inviável</p></div>}

                </div>
                <Footer>
                    <Button onClick={() => this.props.trocarPagina(2)}>Anterior</Button>
                </Footer>
            </div>
        )
    }
}           
