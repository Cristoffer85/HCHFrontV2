// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUserForm from './UpdateUserForm';
import './UserList.css'; // Import UserList.css for styling

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/userprofiles');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleAddUser = async (newUser) => {
        try {
            const response = await axios.post('/api/userprofiles', newUser);
            setUsers([...users, response.data]); // Add the new user to the current list of users
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="user-list-container"> {/* Apply CSS class for container */}
            <h1>User Profiles</h1>
            <ul>
                {users.map((user) => (
                    <li className="user-item" key={user.id}> {/* Apply CSS class for list item */}
                        <div className="user-data"> {/* Apply CSS class for user data container */}
                            <UpdateUserForm
                                user={user}
                                onUpdateUser={fetchUsers}
                                onDeleteUser={handleDeleteUser}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
