import { CustomTable, Title } from "../components";
import { milkHeadTable } from "../constant";
import { createMilk, deleteMilk, fetchMilks, updateMilk } from "../api/apiMilk";
const MilkProduction = () => {
  const fields = [
    { name: "today", label: "Today", type: "Date" },
    { name: "amountMilk", label: "Amount of milk in liters", type: "number" },
  ];

  const handleFormSubmit = async (formValues, action, id, refetch) => {
    try {
      if (action === "add") {
        await createMilk(formValues);
      } else if (action === "edit") {
        updateMilk(formValues, id);
      } else {
        deleteMilk(id);
      }
      refetch();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function fetchDataFunction() {
    try {
      return await fetchMilks();
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  return (
    <div className="w-full">
      <Title label="Milk Production" />
      <CustomTable
        head={milkHeadTable}
        fetchDataFunction={fetchDataFunction}
        fields={fields}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default MilkProduction;
