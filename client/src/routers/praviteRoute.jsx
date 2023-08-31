import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IsTokenValid } from "../hooks";

const PrivateRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenIsValid = IsTokenValid();
  useEffect(() => {
    if (!tokenIsValid) {
      navigate("/auth");
    }
  }, [location, navigate, tokenIsValid]);
  return <Outlet />;
};

export default PrivateRoute;
