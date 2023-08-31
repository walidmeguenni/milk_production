import { CustomTable, Title } from "../components";
import { cowsHeadTable } from "../constant";
import { creatCow, deleteCow, fetchCows, updateCow } from "../api/apiCow";

const Cows = () => {
  const fields = [
    { name: "entryDate", label: "Date Entry", type: "Date" },
    { name: "breed", label: "Breed", type: "text" },
  ];

  const handleFormSubmit = async (formValues, action, id, refetch) => {
    try {
      if (action === "add") {
        await creatCow(formValues);
      } else if (action === "edit") {
        await updateCow(formValues, id);
      } else {
        await deleteCow(id);
      }
      refetch();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function fetchDataFunction() {
    try {
      return await fetchCows();
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  return (
    <div className="w-full">
      <Title label="Cows" />
      <CustomTable
        head={cowsHeadTable}
        fetchDataFunction={fetchDataFunction}
        fields={fields}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Cows;
