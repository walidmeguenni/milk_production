import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../api/apiAuth";
import Input from "./Input";

const Login = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formdata = { email, password };
      const { data } = await SignIn(formdata);
      localStorage.setItem("token", data.token);
      localStorage.setItem("fullName", data.fullName);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" label="Email" value={email} setValue={setEmail} />
      <Input
        type="password"
        label="Password"
        value={password}
        setValue={setPassword}
      />
      {children}
    </form>
  );
};

export default Login;
