/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import './Login.css'
import Input from './Input'
import Button from './Button'

export default ({ children }) =>
    <div>
        <label>Usuário</label>
        <Input class="larguraButton" />
        <Input />
        <Button>Cadastrar-se</Button>
        <Button>Entrar</Button>
        
    </div>