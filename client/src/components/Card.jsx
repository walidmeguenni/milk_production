const Card = ({ label, Icon, value }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow py-5 px-6 rounded-lg ">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-500 opacity-7 rounded-full">
        <Icon size={26} />
      </div>

      <div className="text-right">
        <h3 className="text-lg text-blue-500 font-semibold mb-1">{label}</h3>
        <span className="text-gray-700-700 text-sm "> {value}</span>
      </div>
    </div>
  );
};

export default Card;
