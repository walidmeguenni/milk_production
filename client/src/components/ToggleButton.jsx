import React from "react";
import { useStateContext } from "../context/ContextProvider";

const ToggleButton = () => {
  const { isLogin, toggleAuthMode } = useStateContext();

  return (
    <div className="flex items-center justify-between">
      <p className=" text-[12px]">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          className="text-blue-500 hover:underline ml-1"
          onClick={toggleAuthMode}
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </p>
      <button
        type="submit"
        className={`bg-blue-500 text-white px-3 py-1.5 rounded ${
          isLogin
            ? "bg-blue-500  hover:bg-blue-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isLogin ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default ToggleButton;
