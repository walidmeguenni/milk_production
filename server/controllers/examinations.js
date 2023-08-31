const path = require("path");
const { readData, writeData } = require("../shared");
const filePath = path.join(__dirname, "..", "database", "examinations.json");

exports.getExaminations = (req, res) => {
  try {
    const examinationData = readData(filePath);
    const examinations = examinationData.filter(
      (examination) => examination.userId === req.userData.id
    );
    const sanitizedexaminations = examinations.map(
      ({ userId, ...rest }) => rest
    );
    res.status(201).json({
      message: "Examination data list",
      examinations: sanitizedexaminations,
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add Examination data" });
  }
};

exports.addExamination = (req, res) => {
  try {
    const { examinationDay, disease } = req.body;
    const ExaminationData = readData(filePath);
    const newExamination = {
      id: ExaminationData.length + 1,
      examinationDay,
      disease,
      userId: req.userData.id,
    };
    ExaminationData.push(newExamination);

    writeData(filePath, ExaminationData);
    console.log("Examination data added successfully.");
    res.status(201).json({
      message: "Examination data added successfully",
      data: newExamination,
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add Examination data" });
  }
};

exports.updateExamination = (req, res) => {
  try {
    const { id } = req.params;
    const { examinationDay, disease } = req.body;
    console.log(req.body);
    const ExaminationData = readData(filePath);

    const ExaminationToUpdate = ExaminationData.find(
      (Examination) => Examination.id === parseInt(id)
    );

    if (!ExaminationToUpdate) {
      return res.status(404).json({ error: "Examination not found" });
    }

    ExaminationToUpdate.examinationDay = examinationDay;
    ExaminationToUpdate.disease = disease;
    writeData(filePath, ExaminationData);

    console.log("Examination data updated successfully.");
    res.status(200).json({
      message: "Examination data updated successfully",
      data: ExaminationToUpdate,
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to update Examination data" });
  }
};

exports.deleteExamination = (req, res) => {
  try {
    const { id } = req.params;
    const ExaminationData = readData(filePath);

    const ExaminationIndexToDelete = ExaminationData.findIndex(
      (Examination) => Examination.id === parseInt(id)
    );

    if (ExaminationIndexToDelete === -1) {
      return res.status(404).json({ error: "Examination not found" });
    }

    ExaminationData.splice(ExaminationIndexToDelete, 1);
    writeData(filePath, ExaminationData);

    console.log("Examination data deleted successfully.");
    res.status(200).json({ message: "Examination data deleted successfully" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to delete Examination data" });
  }
};
