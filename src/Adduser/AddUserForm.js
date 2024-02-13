import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = ({ onAddUser }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/userprofiles', { username, email });
            onAddUser(response.data);
            setUsername('');
            setEmail('');

            // Refetch user data after adding a new user
            const getUsersResponse = await axios.get('/api/userprofiles');
            onAddUser(getUsersResponse.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUserForm;
