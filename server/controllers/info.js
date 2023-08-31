const fs = require("fs");
const path = require("path");
const { readData } = require("../shared");
const cowFilePath = path.join(__dirname, "..", "database", "cows.json");
const examinationFilePath = path.join(
  __dirname,
  "..",
  "database",
  "examinations.json"
);
const milkFilePath = path.join(__dirname, "..", "database", "milk.json");
const birthFilePath = path.join(__dirname, "..", "database", "birth.json");

exports.getInfo = (req, res) => {
  try {
    const milkData = readData(milkFilePath);
    const cowsData = readData(cowFilePath);
    const birthData = readData(birthFilePath);
    const examinationData = readData(examinationFilePath);

    const milk = milkData.filter((milk) => milk.userId === req.userData.id);
    const cows = cowsData.filter((cow) => cow.userId === req.userData.id);
    const examination = examinationData.filter(
      (examination) => examination.userId === req.userData.id
    );
    const birth = birthData.filter((birth) => birth.userId === req.userData.id);

    statics = [
      { id: 1, label: "Cows", value: cows.length },
      { id: 2, label: "Milks", value: milk.length },
      { id: 3, label: "Examinations", value: examination.length },
      { id: 4, label: "Births", value: birth.length },
    ];
    res.status(200).json({ statics });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
