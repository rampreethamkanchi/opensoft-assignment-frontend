import React from 'react';
import './login.css'; 
import Profile from './profile';
import { useState } from 'react';
const Login = () => {
  const [validUser, setValidUser] = useState(false);
  const [result, setResult] = useState({});
  const handleLogin = async (e) => {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let gotresult= await fetch(`/verifycredentials/${email}/${password}/`, {
      method: 'GET',
    }).then((res) => res.json());
    console.log("gotresult ",gotresult);
    if(gotresult.message === 'bad'){
      alert("Credentials are incorrect");
    }
    else{
      setResult(gotresult);
      setValidUser(true);
    }
  };
  const showLogin = () => {
    return (
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <input type="email" id='loginEmail' required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input type="password" id='loginPassword' required />
                <label>Password</label>
              </div>
              <button onClick={handleLogin}>Log in</button>
              <div className="register">
                <p>
                  Don't have an account? <a href="/signup">Register Here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  const renderLogin = () => {
    if(validUser){
      return <Profile userdata={result} />
    }
    else{
      return showLogin();
    
    }
  }
  return (
    <>
    {
      renderLogin()
    }
    </>
  );
};

export default Login;
