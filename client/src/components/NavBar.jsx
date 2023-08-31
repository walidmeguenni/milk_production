import { AiOutlineLogout, AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./Menu";
import { useStateContext } from "../context/ContextProvider";

const NavBar = () => {
  const { isOpen, setIsOpen } = useStateContext();
  const fullName  = localStorage.getItem('fullName')
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <nav
      className={`fixed w-full flex items-center h-60 bg-white text-gray-800 z-50 p-4 shadow-md  lg:transition-all lg:duration-300 ${
        isOpen === true
          ? "justify-between lg:justify-end ml-0 lg:ml-[240px] w-full lg:w-[calc(100%-240px)]"
          : "justify-between"
      }`}
    >
      {!isOpen && (
        <div
          className="w-[25px] cursor-pointer hidden lg:block"
          onClick={() => setIsOpen((pervState) => !pervState)}
        >
          <AiOutlineMenuUnfold className="bg-white" size={25} />
        </div>
      )}
      <MobileMenu />

      <div className="flex items-center  justify-end gap-x-2">
        <span className="font-bold text-gray-800 text-sm font-mono  invisible sm:visible uppercase">
          {fullName}
        </span>
        <div
          className="text-red-600 bg-red-100 rounded-full p-2 -rotate-90 cursor-pointer"
          onClick={Logout}
        >
          <AiOutlineLogout size={22} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
