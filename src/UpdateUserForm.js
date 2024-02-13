// UpdateUserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUserForm.css'; // Import UpdateUserForm.css for styling

const UpdateUserForm = ({ user, onUpdateUser, onDeleteUser }) => {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [isEditing, setIsEditing] = useState(false); // Add state for editing

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/userprofiles/${user.id}`, { username, email });
            onUpdateUser(response.data);
            setIsEditing(false); // Turn off editing after update
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/userprofiles/${user.id}`);
            onDeleteUser(user.id);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="update-user-form"> {/* Apply CSS class for form */}
            {!isEditing ? (
                <div className="user-info">
                    <div>{user.username}</div> {/* Wrap username in a div */}
                    <div>{user.email}</div> {/* Wrap email in a div */}
                    <div className="button-container">
                        <button className="update-btn" onClick={handleToggleEdit}>Update</button>
                        <button className="delete-btn" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="button-container">
                        <button type="submit" className="update-btn">Save</button>
                        <button type="button" onClick={handleToggleEdit}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UpdateUserForm;
