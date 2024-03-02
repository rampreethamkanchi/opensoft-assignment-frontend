import React from 'react';
import './login.css'; // Assuming you have the CSS file in your project
import Profile from './profile';
import { useState } from 'react';
const Login = () => {
  const [validUser, setValidUser] = useState(false);
  const [result, setResult] = useState({});
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('Login button clicked');
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    // const userLoginInfo = {
    //   email: email,
    //   password: password,
    // };
    // console.log(userLoginInfo);
    let gotresult= await fetch(`/verifycredentials/${email}/${password}/`, {
      method: 'GET',
    }).then((res) => res.json());
    console.log("gotresult ",gotresult);
    // if(result.message === "Credentials are incorrect"){
    //   alert("Credentials are incorrect");
    // }
    if(gotresult.message === 'bad'){
      alert("Credentials are incorrect");
    }
    // else take user to profile page passing the result object
    else{
      // console.log(result);
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
                {/* <IonIcon name="mail-outline"></IonIcon> */}
                <input type="email" id='loginEmail' required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                {/* <IonIcon name="lock-closed-outline"></IonIcon> */}
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
      // console.log('passing',result);
      // console.log(result);
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
