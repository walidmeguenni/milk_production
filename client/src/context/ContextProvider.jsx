/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <StateContext.Provider
      value={{
        selected,
        setSelected,
        isOpen,
        setIsOpen,
        isLogin,
        setIsLogin,
        toggleAuthMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
