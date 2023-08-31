import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import LinkItem from "./LinkItem";
import { sideBarData } from "../constant";

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="w-[25%] block lg:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <AiOutlineMenu className="bg-white" size={25} />
      </div>

      {isOpenMenu && (
        <div className="fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[65%] bg-gray-800  z-50 shadow block lg:hidden">
          <div className="p-4">
            <ul>
              {sideBarData.map((value, index) => (
                <LinkItem
                  key={index}
                  index={index}
                  label={value.label}
                  link={value.link}
                  Icon={value.Icon}
                  isOpen={true}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
