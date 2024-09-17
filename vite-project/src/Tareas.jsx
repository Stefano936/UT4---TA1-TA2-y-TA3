import React, { useState } from 'react';
import './tarea.css';

const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    };

    const borrarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    const editarTarea = (index) => {
        setNuevaTarea(tareas[index]);
        setEditIndex(index);
    };

    const actualizarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            const nuevasTareas = [...tareas];
            nuevasTareas[editIndex] = nuevaTarea;
            setTareas(nuevasTareas);
            setNuevaTarea('');
            setEditIndex(null);
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
            />
            <button id = "agregarTarea" onClick={editIndex !== null ? actualizarTarea : agregarTarea}>
                {editIndex !== null ? 'Actualizar Tarea' : 'Agregar Tarea'}
            </button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea}
                        <button onClick={() => editarTarea(index)}>Editar</button>
                        <button onClick={() => borrarTarea(index)}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tareas;