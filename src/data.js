/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

const data = {};


data.setTempo = function (valor) {
    localStorage.setItem("tempo", valor);
}

data.getTempo = function () {
    try {
        return parseInt(localStorage.getItem("tempo")) || 0;
    } catch (e) {
        return 0;
    }
}

data.setInvestimento = function (valor) {
    localStorage.setItem("investimento", valor);
}

data.getInvestimento = function () {
    try {
        return Number(localStorage.getItem("investimento")) || 0;
    } catch (e) {
        return 0;
    }
}


data.setTaxa = function (valor) {
    localStorage.setItem("taxa", valor);
}

data.getTaxa = function () {
    try {
        return Number(localStorage.getItem("taxa")) || 0;
    } catch (e) {
        return 0;
    }
}

data.setCustos = function (valor) {
    localStorage.setItem("custos", valor);
}

data.getCustos = function () {
    
    var custos = localStorage.getItem("custos");

    try {
        if (custos)
            return JSON.parse("[" + custos + "]");
        else
            return [];
    } catch (e) {
        return Array.from({ length: custos.length });
    }
}

data.setReceitas = function (valor) {
    localStorage.setItem("receitas", valor);
}

data.getReceitas = function () {
    const receitas = localStorage.getItem("receitas");

    try {
        if (receitas)
            return JSON.parse("[" + receitas + "]");
        else
            return []; 
     } catch (e) {
        return Array.from({ length: receitas.length });
    }
}

export default data;