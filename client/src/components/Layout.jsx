import { useStateContext } from "../context/ContextProvider";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { isOpen } = useStateContext();
  return (
    <div className="">
      <NavBar />
      <SideBar />
      <main
        className={`absolute top-[60px] p-4 h-full lg:transition-all lg:duration-300 ${
          isOpen
            ? "left-0 lg:left-[240px] w-full lg:w-[calc(100%-240px)]"
            : "left-0 lg:left-[60px] w-full lg:w-[calc(100%-60px)] "
        } `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
