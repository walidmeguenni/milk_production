import { CustomTable, Title } from "../components";
import { medicalHeadTable } from "../constant";
import {
  creatExamination,
  deleteExamination,
  fetchExaminations,
  updateExamination,
} from "../api/apiExamination";

const MedicalExamination = () => {
  const fields = [
    { name: "examinationDay", label: "Examination Day", type: "Date" },
    { name: "disease", label: "Disease", type: "text" },
  ];

  const handleFormSubmit = async (formValues, action, id, refetch) => {
    try {
      if (action === "add") {
        await creatExamination(formValues);
      } else if (action === "edit") {
        await updateExamination(formValues, id);
      } else {
        await deleteExamination(id);
      }
      refetch();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function fetchDataFunction() {
    try {
      return await fetchExaminations();
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  return (
    <div className="w-full">
      <Title label="Medical Examination" />
      <CustomTable
        head={medicalHeadTable}
        fetchDataFunction={fetchDataFunction}
        fields={fields}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default MedicalExamination;
