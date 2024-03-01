import React from 'react';
import './login.css'; // Assuming you have the CSS file in your project

const Login = () => {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              {/* <IonIcon name="mail-outline"></IonIcon> */}
     
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="inputbox">
              {/* <IonIcon name="lock-closed-outline"></IonIcon> */}
              <input type="password" required />
              <label>Password</label>
            </div>
            <button>Log in</button>
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
};

export default Login;
