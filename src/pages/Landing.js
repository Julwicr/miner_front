// import { Route, Routes } from "react-router-dom"

import { EnterBtn } from "../components/EnterBtn"
import { LoginForm } from "../components/LoginForm"

export function Landing() {

  const toggleLoginForm = () => {
    const form = document.querySelector('.login-form');
    console.log(form.classList);
  }
  return (
    <div className="landing">
      <h2>Welcome to our private sales.</h2>
      <LoginForm />
      <EnterBtn onclick={toggleLoginForm}/>
      <h3>The right tools for the best miner in town !</h3>
    </div>
  );
}
