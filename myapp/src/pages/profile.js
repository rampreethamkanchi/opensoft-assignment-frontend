import React, { useState, useEffect } from "react";
import "./profile.css";

const Profile = ({ userdata }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [usernameList, setUsernameList] = useState([]);
  const [originalUserData, setOriginalUserData] = useState(userdata);
  const [username, setUsername] = useState(userdata.username);
  const [email, setEmail] = useState(userdata.email);
  const [password, setPassword] = useState(userdata.password);
  useEffect(() => {
    const getUserNames = async () => {
      let username_list = await fetch("/allusernames/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      // console.log(username_list);
      setUsernameList(username_list);
    };
    getUserNames();
  }, [originalUserData.username]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    let gotresult = await fetch(`/userupdate/${originalUserData.username}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    }).then((res) => res.json());
    if (gotresult.message === "bad") {
      alert("Username or Email updated is invalid or already exists");
    } else {
      setOriginalUserData(gotresult);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setUsername(originalUserData.username);
    setEmail(originalUserData.email);
    setPassword(originalUserData.password);
    setIsEditing(false);
  };

  return (
    <section id="profile-section">
      <div className="profile-box">
        <div className="profile-content">
          <h2>User Dashboard</h2>

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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                type="email"
                id="password"
                value={password}
                readOnly={!isEditing}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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

          <div className="profile-section">
            <h3>All Profiles</h3>
            <ul className="profile-list">
              {usernameList.map((user) => {
                return <li>{user.username}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
