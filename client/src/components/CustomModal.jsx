import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Title from "./Title";

const CustomModal = (props) => {
  const {
    isOpen,
    setIsOpen,
    action,
    fields,
    editData,
    setEditData,
    handleFormSubmit,
    refetch,
  } = props;

  const [formValues, setFormValues] = useState({});

  const onClose = () => {
    setIsOpen(false);
  };

  const resetForm = () => {
    setFormValues({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = editData ? editData.id : undefined;
    console.log(id);
    handleFormSubmit(formValues, action, id, refetch);
    setIsOpen(false);
    resetForm();
    setEditData({});
  };

  useEffect(() => {
    const { id, ...editDataWithoutId } = editData;
    setFormValues(action === "edit" ? { ...editDataWithoutId } : {});
  }, [action, editData]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white p-4 rounded-lg shadow-lg   z-50 w-[50%]">
        <div className="flex items-center justify-between mb-4">
          <Title label={action} />
          <div
            className=" text-red-500 p-3 hover:bg-red-100 hover:rounded-full cursor-pointer"
            onClick={onClose}
          >
            <AiOutlineClose size={24} />
          </div>
        </div>

        {action === "delete" ? (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleSubmit}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div className="mb-4" key={index}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                {field.name === "breed" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name] || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                    required
                  >
                    <option value="">Select a breed</option>
                    <option value="Holstein">Holstein</option>
                    <option value="Montbliard">Montbliard</option>
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formValues[field.name] || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                    required

                  />
                )}
              </div>
            ))}

            <div className="flex justify-between items-center mt-7">
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={resetForm}
              >
                Rest
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default CustomModal;
