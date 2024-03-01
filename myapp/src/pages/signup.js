import React from 'react';
import './signup.css'; // Assuming you have the CSS file in your project
const SignUp = () => {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Sign Up</h2>
            <div className="inputbox">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <input type="password" required />
              <label>Password</label>
            </div>
            <button>Sign Up</button>
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

export default SignUp;
