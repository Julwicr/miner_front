import axios from 'axios';
import { useState } from 'react';
import { Navigate } from "react-router";

export const UserRegister = () => {
  const [success, setSuccess] = useState(false);
  const [errorMess, setErrorMess] = useState([]);
  const [formData,setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    telephone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toFetch = 'http://localhost:3000/users';
    const option = {
      headers: {'Access-Control-Allow-Origin': '*'}
    }
    try {
      await axios.post(toFetch, formData, option);
      setSuccess(true);
      localStorage.setItem('firstName', formData.first_name);
      localStorage.setItem('lastName', formData.last_name);
      logNewUser(formData.username, formData.password);
    } catch (err) {
      console.log(err);
      const errResp = JSON.parse(err.request.response);
      setErrorMess(errResp.errors);
    }
  }

  const logNewUser = (username, password) => {
    const userCredentials = {
      username: username,
      password: password
    }
    const fetch = axios.post('http://localhost:3000/auth/login', userCredentials, { headers: {'Access-Control-Allow-Origin': '*'} })
    fetch.then((res) => localStorage.setItem('token', res.data.token));
  }

  const errorMessages = null || errorMess.map((err, i) => <p key={i}> {err} </p>);

  return (
    <>
      {success ?
        <div>You are registered</div> :

        <div className="register-form-wrapper">

          {errorMess.length === 0 ? null : errorMessages}

          <form onSubmit={handleSubmit} className="register-form">

              <div className="register-form-user">
                <div className="">
                  <label htmlFor='username'>Username:</label>
                  <input type="text"
                          id="username"
                          onChange={(e) => setFormData({...formData, username: e.target.value})}
                          value={formData.username}
                          required />
                </div>
                <div className="">
                  <label htmlFor='password'>Password:</label>
                  <input type="password"
                          id="password"
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          required />
                </div>
                <div className="">
                  <label htmlFor='email'>email:</label>
                  <input type="email"
                          id="email"
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          value={formData.email}
                          required />
                </div>

                <div className="">
                  <label htmlFor='firstName'>First name:</label>
                  <input type="text"
                          id="firstName"
                          onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                          value={formData.firstName}
                          required />
                </div>
                <div className="">
                  <label htmlFor='lastName'>Last name:</label>
                  <input type="text"
                          id="lastName"
                          onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                          value={formData.lastName}
                          required />
                </div>
                <div className="">
                  <label htmlFor='telephone'>Telephone:</label>
                  <input type="text"
                          id="telephone"
                          onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                          value={formData.telephone}
                          required />
                </div>
              </div>

              <div className="register-form-address">
                <p>Optionnal.</p>
                <div className="">
                  <label htmlFor='address'>Address:</label>
                  <input type="text"
                          id="address"
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          value={formData.address} />
                </div>
                <div className="">
                  <label htmlFor='city'>City:</label>
                  <input type="text"
                          id="city"
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          value={formData.city} />
                </div>
                <div className="">
                  <label htmlFor='postalCode'>Postal code:</label>
                  <input type="text"
                          id="postalCode"
                          onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                          value={formData.postalCode} />
                </div>
                <div className="">
                  <label htmlFor='country'>Country:</label>
                  <input type="text"
                          id="country"
                          onChange={(e) => setFormData({...formData, country: e.target.value})}
                          value={formData.country} />
                </div>
              </div>

                <button className='register-btn'>Register</button>
            </form>
        </div>
        }
    </>
  )
}
