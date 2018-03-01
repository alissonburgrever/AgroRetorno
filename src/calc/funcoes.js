/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import { calcularTir } from './tir';
import jsPDF from 'jspdf'


var prazoPDF = 'Prazo: '
var prazoPDFNumber = ''
var investimentoPDF = 'Investimento: '
var investimentoPDFNumber = ''
var taxaPDF = 'Taxa: '
var taxaPDFNumber = ''

var anosPDF = [];
var receitasPDF = [];
var custosPDF = [];
var fluxosDeCaixaPDF = [];

var vplPDF = 'VPL - Valor Presente Líquido:'
var vplPDFNumber = ''
var ilPDF = 'IL - Índice de Lucratividade:'
var ilPDFNumber = ''
var tirPDF = 'TIR - Taxa Interna de Retorno:'
var tirPDFNumber = ''

function calcularFluxoDeCaixa(custo, receita) {
    return receita - custo;
}

function calcularTaxaDepreciacao(fluxoDeCaixa, taxa, ano) {
    var inicial = (taxa / 100) + 1;
    var fator = calcularFator(ano, inicial);
    return fluxoDeCaixa / fator;
}

function calcularFator(ano, fluxoDeCaixa) {
    return Math.pow(fluxoDeCaixa, ano);
}

function calcularTaxa(custo, receita, taxa, ano) {
    var fluxoDeCaixa = calcularFluxoDeCaixa(custo, receita);
    return {
        fluxoDeCaixa: fluxoDeCaixa,
        taxaDeDesconto: calcularTaxaDepreciacao(fluxoDeCaixa, taxa, ano),
        receita: receita ? receita : 0,
        custo: custo ? custo : 0
    };
}

export function calcularTaxas(tempo, receitas, custos, taxa) {
    var anos = [];
    for (var ano = 1; ano <= tempo; ano++) {
        // comentario por conta do negocio la
        anosPDF[ano - 1] = ano;
        receitasPDF[ano - 1] = receitas[ano - 1];
        custosPDF[ano - 1] = custos[ano - 1];
        fluxosDeCaixaPDF[ano - 1] = receitas[ano - 1] - custos[ano - 1];
        var receita = receitas[ano - 1];
        var custo = custos[ano - 1];
        anos[ano - 1] = calcularTaxa(custo, receita, taxa, ano);
    }
    return anos;
}

function calcularVPL(somaDaPorcentagem, investimento) {
    var vplNumber = somaDaPorcentagem - investimento;
    vplPDFNumber = vplNumber.toString();
    return somaDaPorcentagem - investimento;
}

function calcularIL(somaDaPorcentagem, investimento) {
    var ilNumber = somaDaPorcentagem / investimento;
    ilPDFNumber = ilNumber.toString();
    return somaDaPorcentagem / investimento;
}

export function calcularValores(tempo, receitas, custos, taxa, investimento) {
    var taxas = calcularTaxas(tempo, receitas, custos, taxa);
    var somaDaPorcentagem = 0;
    var somaDosfluxosDeCaixa = [-investimento];
    var somaDaReceita = 0;
    var somaDoCusto = 0;


    prazoPDFNumber = tempo.toString();
    investimentoPDFNumber = investimento.toString();
    taxaPDFNumber = taxa.toString();


    for (var ano = 0; ano < tempo; ano++) {
        var taxa = taxas[ano];
        somaDaPorcentagem += taxa.taxaDeDesconto;
        somaDosfluxosDeCaixa[ano + 1] = taxa.fluxoDeCaixa;
        somaDaReceita += taxa.receita;
        somaDoCusto += taxa.custo;
    }
    
    try {
        var tir = calcularTir(somaDosfluxosDeCaixa);
        tirPDFNumber = tir.toString();
    } catch (erro) {}

    return {
        taxas: taxas,
        somaDaPorcentagem: somaDaPorcentagem,
        vpl: calcularVPL(somaDaPorcentagem, investimento),
        il: calcularIL(somaDaPorcentagem, investimento),
        tir: tir
    };
}

export function criarRelatorio() {



    var doc = new jsPDF()
    doc.text('Relatório', 90, 10)

    doc.text(prazoPDF, 10, 20)
    doc.text(prazoPDFNumber, 27, 20)

    doc.text(investimentoPDF, 70, 20)
    doc.text(investimentoPDFNumber, 105, 20)

    doc.text(taxaPDF, 150, 20)
    doc.text(taxaPDFNumber, 165, 20)

    doc.text("Ano", 10, 30)
    doc.text("Receita", 48, 30)
    doc.text("Custo", 104, 30)
    doc.text("Fluxo de Caixa", 160, 30)

    var praBaixo = 35;
    for (var i = 0; i < receitasPDF.length; i++) {
        praBaixo = praBaixo + 7;
        doc.text(anosPDF[i].toString(), 10, praBaixo)
        doc.text(receitasPDF[i].toString(), 50, praBaixo)
        doc.text(custosPDF[i].toString(), 105, praBaixo)
        doc.text(fluxosDeCaixaPDF[i].toString(), 165, praBaixo)
    }

    praBaixo = praBaixo + 15;
    doc.text(vplPDF, 10, praBaixo)
    doc.text(vplPDFNumber, 86, praBaixo)
    doc.text(ilPDF, 10, praBaixo + 10)
    doc.text(ilPDFNumber, 81, praBaixo + 10)
    doc.text(tirPDF, 10, praBaixo + 20)
    doc.text(tirPDFNumber, 88, praBaixo + 20)
        //doc.save('Relatório.pdf')
        //doc.autoPrint();

    return doc;
    //window.open(doc.output('bloburl'));
}