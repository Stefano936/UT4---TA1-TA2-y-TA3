import React, { useState } from 'react';
import './tarea.css';

const Tareas = () => {
const [tareas, setTareas] = useState([]);
const [nuevaTarea, setNuevaTarea] = useState('');

const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
    }
};

const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
};

return (
    <div>
    <h1>Lista de Tareas</h1>
    <input
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
        placeholder="Ingrese una nueva tarea"
    />
    <button id = "agregarTarea" onClick={agregarTarea}>Agregar Tarea</button>
    <ul>
        {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
        ))}
        </ul>
    </div>
    );
};

export default Tareas;