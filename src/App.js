// App.js
import React from 'react';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import './App.css'; // Import App.css for styling

const App = () => {
    const handleAddUser = (user) => {
        // Add user to state or perform any necessary actions
    };

    const handleUpdateUser = (updatedUser) => {
        // Update user in state or perform any necessary actions
    };

    return (
        <div className="app-container"> {/* Apply CSS class for App container */}
            <AddUserForm onAddUser={handleAddUser} />
            <UserList onUpdateUser={handleUpdateUser} />
        </div>
    );
};

export default App;
