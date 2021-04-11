import './App.css';
import React from 'react';

export default function PrimerComponente(props) {
    const element =                       
    <div id="contenedor">
        <div id="imagen"><img src={props.url} alt=""></img></div>
        <div id= "titulo"><h2>{props.title}</h2></div>
        <div id="descripcion"><h3>{props.description}</h3></div>
     </div>
    ;
    return element; 
}