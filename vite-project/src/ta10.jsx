import React from "react";
import { useState, useEffect } from 'react'

//Llamar a api https://jsonplaceholder.typicode.com/users y hacer que muestre el nombre de usuario y el email de la respuesta que obtiene de la api

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
            {users.map(user => (
                <li key={user.id}>
                    <strong>{user.username}</strong> - {user.email}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default UserList;