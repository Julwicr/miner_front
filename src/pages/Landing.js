import { LoginForm } from "../components/LoginForm"
import { useState } from 'react';

export function Landing() {
  const [formIsShown, setFormIsShown] = useState(false);
  console.log(formIsShown, 'here')
  return (
    <div className="landing">
      <h2>Welcome to our private sales.</h2>
      <LoginForm isShown={formIsShown} setIsShown={() => setFormIsShown(false)}/>
      <button className="enter-btn" onClick={() => setFormIsShown(true)}>Enter</button>
      <h3>The right tools for the best miner in town !</h3>
    </div>
  );
}
