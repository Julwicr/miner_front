export function LoginForm() {
  return (
    <div className="login-form">
      <p>Please enter the credentials you have securely received.</p>
      <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {/* {renderErrorMessage("uname")} */}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {/* {renderErrorMessage("pass")} */}
       </div>
       <div className="button-container">
         <input type="submit" value="Log In" className="Login-btn"/>
       </div>
     </form>
    </div>
  );
}
