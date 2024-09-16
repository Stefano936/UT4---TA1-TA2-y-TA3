import React from "react";

import './contador.css'

import { useState } from 'react'

const Contador = ({c}) => {
    const [count, setCount] = useState(c)
    
    function handleAumentar() {
        setCount(count + 1);
    }

    function handleDisminuir() {
        setCount(count - 1);
    }

    return (
        <div className = "contador">
            <h1 className = "contadorTitle">Contador: {count}</h1>
            <button className = "contadorButton" onClick={handleAumentar}>Aumentar</button>
            <button className = "contadorButton" onClick={handleDisminuir}>Disminuir</button>
        </div>
        );
    }

export default Contador;