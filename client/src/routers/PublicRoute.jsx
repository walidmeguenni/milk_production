import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { IsTokenValid } from "../hooks";

const PublicRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenIsValid = IsTokenValid();
  useEffect(() => {
    if (tokenIsValid) {
      navigate(-1);
    }
  }, [location, navigate, tokenIsValid]);
  return <Outlet />;
};

export default PublicRoute;
