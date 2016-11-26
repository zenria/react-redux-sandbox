import React from 'react';

const Button = ({ onClick, text, disabled})=> (
    <input type="button" onClick={onClick} value={text} disabled={disabled}/>
)

export default Button;
