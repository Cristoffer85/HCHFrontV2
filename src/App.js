// App.js
import React from 'react';
import UserList from './UserList';
import './App.css'; // Import App.css for styling

const App = () => {

    const handleUpdateUser = (updatedUser) => {
        // Update user in state or perform any necessary actions
    };

    return (
        <div className="app-container"> {/* Apply CSS class for App container */}
            <UserList onUpdateUser={handleUpdateUser} />
        </div>
    );
};

export default App;
