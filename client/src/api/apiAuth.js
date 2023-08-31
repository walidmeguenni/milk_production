import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });
export const SignIn = async (userData) => {
  try {
    return await API.post("/user/login", userData);
  } catch (error) {
    console.log(error);
  }
};

export const Signup = async (userData) => {
  try {
    return await API.post("/user/signup", userData);
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (id) => API.get(`/users/logout/${id}`);
