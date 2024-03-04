import React from "react";
import "./signup.css";
import Profile from "./profile";
import { useState } from "react";
const SignUp = () => {
  const [validUser, setValidUser] = useState(false);
  const [result, setResult] = useState({});
  const handleSignUp = async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const userSignupInfo = {
      username: username,
      email: email,
      password: password,
    };

    let gotresult = await fetch("/userregistration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSignupInfo),
    }).then((res) => res.json());
    console.log("gotresult ", gotresult);
    if (gotresult.message === "bad") {
      alert("Username or Email is invalid or already exists");
    } else {
      setResult(gotresult);
      setValidUser(true);
    }
  };
    const showSignUp = () => {
      return (
        <section>
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <h2>Sign Up</h2>
                <div className="inputbox">
                  <input type="text" id="username" required />
                  <label>Username</label>
                </div>
                <div className="inputbox">
                  <input type="email" id="email" required />
                  <label>Email</label>
                </div>
                <div className="inputbox">
                  <input type="password" id="password" required />
                  <label>Password</label>
                </div>
                <button onClick={handleSignUp}>Sign Up</button>
                <div className="login">
                  <p>
                    Already have an account? <a href="/">Login Here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
    };
    const renderSignUp = () => {
      if (validUser) {
        return <Profile userdata={result} />;
      } else {
        return showSignUp();
      }
    };

    return <>{renderSignUp()}</>;
  };

export default SignUp;
