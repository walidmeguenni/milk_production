import { CustomTable, Title } from "../components";
import { birthsHeadTable } from "../constant";
import {
  creatBirth,
  deleteBirth,
  fetchBirths,
  updateBirth,
} from "../api/apiBirth";

const Births = () => {
  const fields = [
    { name: "cowId", label: "Mother Cow Number", type: "number" },
    { name: "birthDate", label: "Date of birth", type: "Date" },
    { name: "breed", label: "Breed", type: "text" },
  ];

  const handleFormSubmit = async (formValues, action, id, refetch) => {
    try {
      if (action === "add") {
        await creatBirth(formValues);
      } else if (action === "edit") {
        await updateBirth(formValues, id);
      } else {
        await deleteBirth(id);
      }
      refetch();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function fetchDataFunction() {
    try {
      return await fetchBirths();
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  return (
    <div className="w-full">
      <Title label="Births" />
      <CustomTable
        head={birthsHeadTable}
        fetchDataFunction={fetchDataFunction}
        fields={fields}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Births;
