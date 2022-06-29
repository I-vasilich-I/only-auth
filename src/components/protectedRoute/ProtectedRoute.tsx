import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants";
import Context from "../../context/Context";

const { LOGIN } = ROUTES;

const ProtectedRoutes = (): JSX.Element => {
  const { user } = useContext(Context)
  const location = useLocation();
  
  if (!user) {
    return <Navigate to={LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;