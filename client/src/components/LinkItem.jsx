import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const LinkItem = ({ index, label, Icon, link, isOpen }) => {
  const { selected, setSelected } = useStateContext();
  return (
    <>
      <Link
        to={link}
        className={`flex items-center gap-x-5 p-3 rounded-lg mx-2 mb-2 hover:bg-gray-700 ${
          selected === index ? "bg-gray-700" : ""
        } `}
        key={index}
        onClick={() => setSelected(index)}
      >
        <Icon color="white" size={20} />
        {isOpen && <span className="text-white font-medium">{label}</span>}
      </Link>
    </>
  );
};

export default LinkItem;
