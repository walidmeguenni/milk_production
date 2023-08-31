import decode from "jwt-decode";
import { useStateContext } from "../context/ContextProvider";
export const IsTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  try {
    const decodedToken = decode(token);
    if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
