import React from "react";
import './contador.css'
import { useState } from 'react'

const ContadorMostrar = ({c}) => {
    const [state, setState] = useState(true)

    return (
        <div className = "contador">
            <h1 style={{display: state ? "block" : "none"}}>Hola, puedo desaparecer</h1>
            <button onClick={() => setState(!state)}>{state ? "Desaparecer" : "Aparecer"}</button>
        </div>
        );
    }

export default ContadorMostrar;