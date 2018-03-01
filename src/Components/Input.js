/**
Nome: Software GER;
Autor: Alisson Burgrever;
Data: 22/05/2017;
*/

import React from 'react'
import './Input.css'

export default ({ label, ...inputProps }) =>
    <div className="components-input" style={label ? {marginBottom: 30} : {} }>
        <label>
            <span>{label}</span>
            <input type="text" {...inputProps} />
        </label>
    </div>