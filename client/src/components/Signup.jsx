import { useState } from "react";
import { Signup } from "../api/apiAuth";
import { useStateContext } from "../context/ContextProvider";
import Input from "./Input";

const SignUp = ({ children }) => {
  const { setIsLogin } = useStateContext();
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formdata = { fullName, email, password, confirmPassword };
      await Signup(formdata);
      setIsLogin(true);
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Full Name"
        value={fullName}
        setValue={setFullName}
      />
      <Input type="email" label="Email" value={email} setValue={setEmail} />
      <Input
        type="password"
        label="Password"
        value={password}
        setValue={setPassword}
      />
      <Input
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      {children}
    </form>
  );
};

export default SignUp;
