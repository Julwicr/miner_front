import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

const userAuth = () => Cookies.get('loggedIn');

const ProtectedRoutes = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
