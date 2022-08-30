import { LoginForm } from "../components/LoginForm"
import { useState } from 'react';
import Cookies from "js-cookie";
import { Link } from "react-router-dom"

export function Landing() {
  const [formIsShown, setFormIsShown] = useState(false);

  return (
    <div className="landing">
      <h2>Welcome to our private sales.</h2>
      <LoginForm isShown={formIsShown} setIsShown={() => setFormIsShown(false)}/>
      {
        Cookies.get('loggedIn') ?
        <Link to="/shop" className="enter-btn">Enter</Link> :

        <button className="enter-btn" onClick={() => setFormIsShown(true)}>Log In</button>
      }
      <h3>The right tools for the best miner in town !</h3>
    </div>
  );
}
