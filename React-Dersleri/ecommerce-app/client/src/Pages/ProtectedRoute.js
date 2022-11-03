import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ element, admin }) {
  const { loggedIn, user, isUserAdmin } = useAuth();

  // admin varsa ve user.role admin ise admin profilini görüntüle aksi halde anasayfaya yönlendir.
  if (admin && user.role !== "admin") {
    return <Navigate to="/" />;
  }
  //login olunmussa profile gitsin, giris yapılmadıysa ana sayfaya gitsin.
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
