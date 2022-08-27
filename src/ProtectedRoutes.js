import { Navigate, Outlet } from "react-router";

const userAuth = () => {
  const user = { loggedIn: false }
  return user && user.loggedIn;
}

const ProtectedRoutes = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
