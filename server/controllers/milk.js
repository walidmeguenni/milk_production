const path = require("path");
const { readData, writeData } = require("../shared");
const filePath = path.join(__dirname, "..", "database", "milk.json");

exports.getMilks = (req, res) => {
  try {
    const MilkData = readData(filePath);
    const milks = MilkData.filter((milk) => milk.userId === req.userData.id);
    const sanitizedmilks = milks.map(({ userId, ...rest }) => rest);
    res.status(201).json({ message: "Milk data list", milks: sanitizedmilks });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add Milk data" });
  }
};

exports.addMilk = (req, res) => {
  try {
    const { today, amountMilk } = req.body;
    const MilkData = readData(filePath);
    const newMilk = {
      id: MilkData.length + 1,
      today,
      amountMilk,
      userId: req.userData.id,
    };
    MilkData.push(newMilk);
    writeData(filePath, MilkData);
    console.log("Milk data added successfully.");
    res
      .status(201)
      .json({ message: "Milk data added successfully", data: newMilk });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add Milk data" });
  }
};

exports.updateMilk = (req, res) => {
  try {
    const { id } = req.params;
    const { today, amountMilk } = req.body;
    const MilkData = readData(filePath);
    const MilkToUpdate = MilkData.find((Milk) => Milk.id === parseInt(id));
    if (!MilkToUpdate) {
      return res.status(404).json({ error: "Milk not found" });
    }

    MilkToUpdate.today = today;
    MilkToUpdate.amountMilk = amountMilk;

    writeData(filePath, MilkData);

    console.log("Milk data updated successfully.");
    res
      .status(200)
      .json({ message: "Milk data updated successfully", data: MilkToUpdate });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to update Milk data" });
  }
};

exports.deleteMilk = (req, res) => {
  try {
    const { id } = req.params;
    const MilkData = readData(filePath);

    const MilkIndexToDelete = MilkData.findIndex(
      (Milk) => Milk.id === parseInt(id)
    );

    if (MilkIndexToDelete === -1) {
      return res.status(404).json({ error: "Milk not found" });
    }

    MilkData.splice(MilkIndexToDelete, 1);
    writeData(filePath, MilkData);
    console.log("Milk data deleted successfully.");
    res.status(200).json({ message: "Milk data deleted successfully" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to delete Milk data" });
  }
};

exports.graphMilk = (req, res) => {
  try {
    const MilkData = readData(filePath);
    const milks = MilkData.filter((milk) => milk.userId === req.userData.id);
    const labels = milks.map((record) => record.today);
    const data = milks.map((record) => parseInt(record.amountMilk));
    const datasets = [
      {
        label: "Milk Production",
        data: data,
        borderColor: "#10B981",
        borderWidth: 2,
        fill: false,
      },
    ];
    console.log(labels);
    console.log(datasets);
    return res.status(200).json({
      labels,
      datasets,
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to get graph" });
  }
};
