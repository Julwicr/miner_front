import axios from 'axios';
import { useState } from 'react';
import { Navigate } from "react-router";
import Cookies from "js-cookie";

export function LoginForm() {
  const [user,setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toFetch = `https://miner-api.herokuapp.com/auth?username=${user}&password=${pwd}`
    try {
      const response = await axios.post(toFetch);
      console.log(response.data.username, response.data);
      response.data.username === undefined ? setSuccess(false) : setSuccess(true);

      localStorage.setItem('firstName', response.data.first_name);
      localStorage.setItem('lastName', response.data.last_name);

      Cookies.set('loggedIn', true);
    } catch (err) {

    }
  }

  return (
    <>
      {success ? (
        <Navigate to="/shop" />
      ) : (
        <div className="login-form">
          <p>Please enter the credentials you have securely received.</p>
          <form onSubmit={handleSubmit}>
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

            <button>Sign In</button>
        </form>
        </div>
      )}
    </>
  );
}
