/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import './Footer.css'

export default ({ children }) =>
    <div className="components-footer">
        <div className="components-footer-fixed" >
            {children}
        </div>
    </div>