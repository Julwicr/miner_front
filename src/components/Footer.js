import { Link } from "react-router-dom"

export function Footer() {
  return (
    <div className="footer">
      <Link to="/about" className="footer">About</Link>
    </div>
  );
}
