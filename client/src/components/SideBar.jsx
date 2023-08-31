import { AiOutlineMenuFold } from "react-icons/ai";
import Logo from "../assets/images/DashCows.svg";
import { sideBarData } from "../constant";
import LinkItem from "./LinkItem";
import { useStateContext } from "../context/ContextProvider";

const SideBar = () => {
  const { isOpen, setIsOpen } = useStateContext();
  return (
    <aside
      className={`fixed  left-0 bottom-0 bg-gray-800 h-full  transition-all duration-300 hidden lg:block ${
        isOpen ? "top-0  w-0 lg:w-240" : "top-[60px] w-0 lg:w-[60px]"
      }`}
    >
      <div
        className={`flex items-center ${
          isOpen ? "justify-between" : "justify-start"
        } p-3`}
      >
        {isOpen && (
          <img src={Logo} alt="logo" className="pl-2 w-[120px] h-[40px]" />
        )}
        {isOpen && (
          <div
            className="w-[25px] cursor-pointer"
            onClick={() => setIsOpen((pervState) => !pervState)}
          >
            <AiOutlineMenuFold
              className="bg-bule-600"
              color="white"
              size={25}
            />
          </div>
        )}
      </div>
      <div className={`${isOpen ? "mt-5" : ""}`}>
        <ul>
          {sideBarData.map((value, index) => (
            <LinkItem
              key={index}
              index={index}
              label={value.label}
              link={value.link}
              isOpen={isOpen}
              Icon={value.Icon}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;
