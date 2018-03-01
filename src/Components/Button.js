/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import './Button.css'

export default ({ children, ...props }) =>
    <button {...props} className="components-button">{children}</button>