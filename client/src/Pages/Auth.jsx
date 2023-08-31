import { Login, SignUp, ToggleButton } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Auth = () => {
  const { isLogin } = useStateContext();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        {isLogin ? (
          <Login>
            <ToggleButton />
          </Login>
        ) : (
          <SignUp>
            <ToggleButton />
          </SignUp>
        )}
      </div>
    </div>
  );
};

export default Auth;
