import { Link } from "react-router-dom"
import styles from "../stylesheets/modules/Footer.module.scss"

export function Footer() {
  return (
    <div className="footer">
      <Link to="/about" className={styles.link}>About</Link>
    </div>
  );
}
