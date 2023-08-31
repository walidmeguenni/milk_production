const path = require("path");
const { readData, writeData } = require("../shared");
const filePath = path.join(__dirname, "..", "database", "cows.json");

exports.getCows = (req, res) => {
  try {
    const cowData = readData(filePath);
    const cows = cowData.filter((cow) => cow.userId === req.userData.id);
    const sanitizedCows = cows.map(({ userId, ...rest }) => rest);
    res.status(201).json({ message: "Cow data list", cows: sanitizedCows });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add cow data" });
  }
};

exports.addCow = (req, res) => {
  try {
    const { entryDate, breed } = req.body;
    const cowData = readData(filePath);
    const newCow = {
      id: cowData.length + 1,
      entryDate,
      breed,
      userId: req.userData.id,
    };
    cowData.push(newCow);
    writeData(filePath, cowData);
    console.log("Cow data added successfully.");
    res
      .status(201)
      .json({ message: "Cow data added successfully", data: newCow });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add cow data" });
  }
};

exports.updateCow = (req, res) => {
  try {
    const { id } = req.params;
    const { entryDate, breed } = req.body;
    console.log(req.body);
    const cowData = readData(filePath);

    const cowToUpdate = cowData.find((cow) => cow.id === parseInt(id));

    if (!cowToUpdate) {
      return res.status(404).json({ error: "Cow not found" });
    }

    cowToUpdate.entryDate = entryDate;
    cowToUpdate.breed = breed;
    writeData(filePath, cowData);
    console.log("Cow data updated successfully.");
    res
      .status(200)
      .json({ message: "Cow data updated successfully", data: cowToUpdate });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to update cow data" });
  }
};

exports.deleteCow = (req, res) => {
  try {
    const { id } = req.params;
    const cowData = readData(filePath);

    const cowIndexToDelete = cowData.findIndex(
      (cow) => cow.id === parseInt(id)
    );

    if (cowIndexToDelete === -1) {
      return res.status(404).json({ error: "Cow not found" });
    }

    cowData.splice(cowIndexToDelete, 1);
    writeData(filePath, cowData);
    console.log("Cow data deleted successfully.");
    res.status(200).json({ message: "Cow data deleted successfully" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to delete cow data" });
  }
};
