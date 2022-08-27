import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const Header = () => {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove('loggedIn');
  }

  return (
    <header>
      <div className="user-info">
        Hi {firstName} {lastName}, enjoy your shoping with us !
      </div>

      <button onClick={() => {
        handleLogout();
        navigate('/');
      }}>Log out</button>
    </header>
  )
}

export default Header
