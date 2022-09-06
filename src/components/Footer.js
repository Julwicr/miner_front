import { Link } from "react-router-dom"

export function Footer() {
  return (
    <div className="footer">
      {localStorage.getItem('token') === null ?
        <Link to="/register" className="about-link">Register</Link>
       : null}
      <Link to="/about" className="about-link">About</Link>
    </div>
  );
}
