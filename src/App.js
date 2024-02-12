import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({});
  const [updateProfile, setUpdateProfile] = useState({});
  const [updatedValues, setUpdatedValues] = useState({});

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const response = await axios.get('/api/userprofiles');
        setUserProfiles(response.data);
      } catch (error) {
        console.error('Error fetching user profiles:', error);
      }
    };

    fetchUserProfiles();
  }, []);

  const handleCreateProfile = async () => {
    try {
      const response = await axios.post('/api/userprofiles', newProfile);
      setUserProfiles([...userProfiles, response.data]);
      setNewProfile({});
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  };

  const handleDeleteProfile = async (userId) => {
    try {
      await axios.delete(`/api/userprofiles/${userId}`);
      setUserProfiles(userProfiles.filter(profile => profile.userId !== userId));
    } catch (error) {
      console.error('Error deleting user profile:', error);
    }
  };

  const handleUpdateProfile = async (userId) => {
    try {
      const response = await axios.put(`/api/userprofiles/${userId}`, updateProfile);
      setUserProfiles(userProfiles.map(profile => (profile.userId === userId ? response.data : profile)));
      setUpdateProfile({});
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleSaveChanges = async (userId) => {
    try {
      const updatedProfile = {
        ...updateProfile,
        ...updatedValues
      };
      await axios.put(`/api/userprofiles/${userId}`, updatedProfile);
      const updatedUserProfiles = userProfiles.map(profile => {
        if (profile.userId === userId) {
          return { ...profile, ...updatedProfile };
        }
        return profile;
      });
      setUserProfiles(updatedUserProfiles);
      setUpdateProfile({});
      setUpdatedValues({});
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };


  const handleCancelUpdate = () => {
    setUpdateProfile({});
    setUpdatedValues({});
  };

  return (
      <div className="App">
        <div className="user-profiles-container">
          <h1>User Profiles</h1>
          <div className="user-profiles-list">
            {userProfiles.map((profile) => (
                <div key={profile.userId} className="user-profile-item">
                  <div className="user-profile-details">
                    <p>
                      <strong>Username:</strong>
                      {profile.userId === updateProfile.userId ? (
                          <input
                              type="text"
                              value={updatedValues.username || profile.username}
                              onChange={(e) => setUpdatedValues({ ...updatedValues, username: e.target.value })}
                          />
                      ) : (
                          <span>{profile.username}</span>
                      )}
                    </p>
                    <p>
                      <strong>Email:</strong>
                      {profile.userId === updateProfile.userId ? (
                          <input
                              type="email"
                              value={updatedValues.email || profile.email}
                              onChange={(e) => setUpdatedValues({ ...updatedValues, email: e.target.value })}
                          />
                      ) : (
                          <span>{profile.email}</span>
                      )}
                    </p>
                    {profile.userId === updateProfile.userId ? (
                        <div>
                          <button onClick={() => handleSaveChanges(profile.userId)}>Save</button>
                          <button onClick={() => handleCancelUpdate()}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                          <button onClick={() => setUpdateProfile(profile)}>Update</button>
                          <button onClick={() => handleDeleteProfile(profile.userId)}>Delete</button>
                        </div>
                    )}
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="user-actions-container">
          <div className="create-profile-form">
            <br></br>
            <h2>Create New Profile</h2>
            <input
                type="text"
                placeholder="Username"
                value={newProfile.username || ''}
                onChange={(e) => setNewProfile({ ...newProfile, username: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={newProfile.email || ''}
                onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
            />
            <button onClick={handleCreateProfile}>Create Profile</button>
          </div>
        </div>
      </div>
  );
}

export default App;
