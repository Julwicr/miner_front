import axios from 'axios';
import { useState } from 'react';
import { Navigate } from "react-router";
import Cookies from "js-cookie";

export function LoginForm({ isShown, setIsShown }) {
  const [user,setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      username: user,
      password: pwd
    }
    const toFetch = 'http://localhost:3000/auth/login'
    try {
      const response = await axios.post(toFetch, credentials, { headers: {'Access-Control-Allow-Origin': '*'} });

      localStorage.setItem('firstName', response.data.first_name);
      localStorage.setItem('lastName', response.data.last_name);
      localStorage.setItem('token', response.data.token);
      Cookies.set('loggedIn', true);
      setSuccess(true);
    } catch (err) {
      setFailed(true);
      console.log(err);
    }
  }

  return (
    <>
      {success ? (
        <Navigate to="/shop" />
      ) : (
        <div className="login-form"
             style={isShown ? {opacity: 1, transform: 'none'} : {opacity: 0.5, transform: 'translateY(1000px)'}}>
          <button className='close-btn' onClick={setIsShown}>X</button>
          {failed ?  <p>Sorry, wrong credentials.</p> :
          <p>Please enter the credentials you have securely received.</p>
          }
          <form onSubmit={handleSubmit} className="login-form-f">
          <div className="input-container">
            <label htmlFor='username'>Username:</label>
            <input type="text"
                    id="username"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required />
          </div>
          <div className="input-container">
            <label htmlFor='password'>Password:</label>
            <input type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required />
          </div>

            <button className='login-btn'>Sign In</button>
        </form>
        </div>
      )}
    </>
  );
}
