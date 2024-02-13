// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUserForm from './UpdateUserForm';
import AddUserForm from './AddUserForm'; // Import AddUserForm
import './UserList.css'; // Import UserList.css for styling

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/userprofiles');
            setUsers(response.data.reverse()); // Reverse the order of the users array
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`/api/userprofiles/${userId}`);
            fetchUsers(); // Refresh user list after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleAddUser = async (newUser) => {
        try {
            const response = await axios.post('/api/userprofiles', newUser);
            setUsers([response.data, ...users]); // Add the new user to the beginning of the list
            //fetchUsers(); // No need to refresh the user list, the new user is already added
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="user-list-container"> {/* Apply CSS class for container */}
            <h5 className="create-user-text">Create new user:</h5> {/* Apply CSS class for white text */}
            <AddUserForm onAddUser={handleAddUser}/> {/* Pass handleAddUser to AddUserForm */}
            <h1>Stored Database Users</h1>
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
