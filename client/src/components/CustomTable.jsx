import { useState } from "react";
import CustomModal from "./CustomModal";
import { useQuery } from "react-query";

const CustomTable = ({ head, fetchDataFunction, fields, handleFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [editData, setEditData] = useState({});

  const handleAddModal = () => {
    setAction("add");
    setIsOpen(true);
  };

  const handleEditModal = (row) => {
    setAction("edit");
    setEditData(row);
    setIsOpen(true);
  };
  const handleDeleteModal = (row) => {
    setAction("delete");
    setEditData(row);
    setIsOpen(true);
  };

  const { data, isLoading, isError, refetch } = useQuery(
    "cow",
    fetchDataFunction
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="mt-10">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddModal}
          className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add
        </button>
      </div>

      {data.length !== 0 ? (
        <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {head.map((value, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {value}
                  </th>
                ))}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {data?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEditModal(row)}
                      className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteModal(row)}
                      className="px-2 py-1 ml-2 text-xs font-semibold text-red-600 bg-red-100 rounded-md hover:bg-red-200"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>{" "}
        </div>
      ) : (
        <div className="rounded-md p-4">
          <p className="text-gray-500 text-center">No data available.</p>
        </div>
      )}

      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        action={action}
        fields={fields}
        handleFormSubmit={handleFormSubmit}
        editData={editData}
        setEditData={setEditData}
        refetch={refetch}
      />
    </div>
  );
};

export default CustomTable;
