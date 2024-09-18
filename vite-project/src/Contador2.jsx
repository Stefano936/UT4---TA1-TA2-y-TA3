import React from "react";

import './contador.css'

import { useState, useEffect } from 'react'

const Contador2 = ({c}) => {
    const [count, setCount] = useState(c)
    
    useEffect(() => {
        console.log(`El contador cambió a: ${count}`);
    
        document.title = `Contador: ${count}`;

        return () => {
            console.log("Limpieza al desmontar o antes de actualizar");
        };
    }, [count]);  

    return (
        <div className = "contador">
            <h1 className = "contadorTitle">Contador: {count}</h1>
            <button className = "contadorButton" onClick={() => setCount(count + 1)}>Aumentar</button>
            <button className = "contadorButton" onClick={() => setCount(count - 1)}>Disminuir</button>
        </div>
        );
    }

export default Contador2;