// Profile.js
import React, { useState } from 'react';
import './profile.css'; // Updated CSS file name assuming you've renamed it

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('YourUsername');
  const [email, setEmail] = useState('your.email@example.com');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <section id="profile-section">
      <div className="profile-box">
        <div className="profile-content">
          <h2>User Dashboard</h2>

          {/* Profile View and Edit Section */}
          <div className="profile-section">
            <h3>Your Profile</h3>
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                readOnly={!isEditing}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                readOnly={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {isEditing ? (
              <>
                <button onClick={handleSaveClick}>Save Profile</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <button onClick={handleEditClick}>Edit Profile</button>
            )}
          </div>

          {/* View All Profiles Section */}
          <div className="profile-section">
            <h3>All Profiles</h3>
            <ul className="profile-list">
              <li>Username1</li>
              <li>Username2</li>
              {/* Add more profiles as needed */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
