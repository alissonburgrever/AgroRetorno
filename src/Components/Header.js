/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import logo from '../logo.png'
import './Header.css'

export default ({ children }) =>
    <div className="components-header">
        <div className="components-header-fixed">
            <img src={logo} alt="utfpr" />
            <div>{children}</div>
        </div>
    </div>