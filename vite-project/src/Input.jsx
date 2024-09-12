import React, { useState } from "react";
import './input.css';

const Input = () => {
    const [texto, setTexto] = useState("");

    const manageChanges = (evento) => {
        setTexto(evento.target.value); 
    };

    return (
        <>
            <div className="inputName">
                <label>
                    Enter text: <input name="myInput" value={texto} onChange={manageChanges} />
                </label>
                <hr />
            </div>

            {texto && <div className="inputText">
                Texto ingresado: {texto}
            </div>}
        </>
    );
}

export default Input;