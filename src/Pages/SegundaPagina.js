/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import Input from '../Components/Input'
import './SegundaPagina.css'
import data from '../data'
import { calcularValores } from '../calc/funcoes'

export default class SegundaPagina extends React.Component {

    constructor() {
        super();

        this.state = {
            custos: data.getCustos(),
            receitas: data.getReceitas(),
            taxa: data.getTaxa(),
            tempo: data.getTempo(),
            investimento: data.getInvestimento()
        };

        this.trocarCusto = this.trocarCusto.bind(this);
        this.trocarReceita = this.trocarReceita.bind(this);   
    }

    componentDidMount() {
        if (!this.state.custos.length)
            this.trocarCusto(0, { target: { value: 0 } });

        if (!this.state.receitas.length)
            this.trocarReceita(0, { target: { value: 0 } }); 
    }

    trocarCusto(index, event) {
        const custo = event.target.value.replace(",",".");
        const { custos, tempo } = this.state;
    
        for (let i = index; i < tempo; i++)
            custos[i] = custo;
    
        data.setCustos(custos);
        this.setState({ custos: custos });
    }

    trocarReceita(index, event) {
        const receita = event.target.value.replace(",",".");
        const { receitas, tempo } = this.state;
    
        for (let i = index; i < tempo; i++)
            receitas[i] = receita;
    
        data.setReceitas(receitas);
        this.setState({ receitas: receitas });
    }

    render() {
        const { taxa, receitas, custos, investimento, tempo } = this.state;
        const { taxas } = calcularValores(tempo, receitas, custos, taxa, investimento);


        return (
            <div className="page-segunda-pagina">
                <Header>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width: '10%'}}>Ano</th>
                                <th style={{width: '40%'}}>Receita (R$)</th>
                                <th style={{width: '40%'}}>Custo (R$)</th>
                                <th style={{width: '10%'}}>F.Caixa</th>
                            </tr>
                        </thead>
                    </table>
                    <hr />
                </Header>
                <div className="page-segunda-pagina-conteudo">
                    <table>
                        <tbody>
                            {taxas.map((t, index) => 
                                <tr key={index}>
                                    <td style={{width: '10%'}}>{index + 1}</td>
                                    <td style={{width: '40%'}}>
                                        <Input value={t.receita} onChange={event => this.trocarReceita(index, event)} />
                                    </td>
                                    <td style={{width: '40%'}}>
                                        <Input value={t.custo} onChange={event => this.trocarCusto(index, event)} />
                                    </td>
                                    <td style={{width: '10%'}}>
                                        {"R$ "+t.fluxoDeCaixa}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Footer>
                    <Button onClick={() => this.props.trocarPagina(1)}>Anterior</Button>
                    <Button onClick={() => this.props.trocarPagina(3)}>Próximo</Button>
                </Footer>
            </div>
        )
    }
}