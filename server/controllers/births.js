const path = require("path");
const { readData, writeData } = require("../shared");
const filePath = path.join(__dirname, "..", "database", "birth.json");

exports.getBirths = (req, res) => {
  try {
    const BirthData = readData(filePath);
    const births = BirthData.filter(
      (birth) => birth.userId === req.userData.id
    );
    const sanitizedbirths = births.map(({ userId, ...rest }) => rest);
    res
      .status(201)
      .json({ message: "Birth data list", births: sanitizedbirths });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add Birth data" });
  }
};

exports.addBirth = (req, res) => {
  try {
    const { cowId, birthDate, breed } = req.body;
    const BirthData = readData(filePath);
    const newBirth = {
      id: BirthData.length + 1,
      cowId,
      birthDate,
      breed,
      userId: req.userData.id,
    };
    BirthData.push(newBirth);
    writeData(filePath, BirthData);
    console.log("Birth data added successfully.");
    res
      .status(201)
      .json({ message: "Birth data added successfully", data: newBirth });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to add Birth data" });
  }
};

exports.updateBirth = (req, res) => {
  try {
    const { id } = req.params;
    const { cowId, birthDate, breed } = req.body;
    console.log(req.body);
    const BirthData = readData(filePath);

    const BirthToUpdate = BirthData.find((Birth) => Birth.id === parseInt(id));

    if (!BirthToUpdate) {
      return res.status(404).json({ error: "Birth not found" });
    }

    BirthToUpdate.cowId = cowId;
    BirthToUpdate.birthDate = birthDate;
    BirthToUpdate.breed = breed;

    writeData(filePath, BirthData);
    console.log("Birth data updated successfully.");
    res.status(200).json({
      message: "Birth data updated successfully",
      data: BirthToUpdate,
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to update Birth data" });
  }
};

exports.deleteBirth = (req, res) => {
  try {
    const { id } = req.params;
    const BirthData = readData(filePath);
    console.log(BirthData);
    const BirthIndexToDelete = BirthData.findIndex(
      (Birth) => Birth.id === parseInt(id)
    );
    if (BirthIndexToDelete === -1) {
      return res.status(404).json({ error: "Birth not found" });
    }

    BirthData.splice(BirthIndexToDelete, 1);

    writeData(filePath, BirthData);
    console.log("Birth data deleted successfully.");
    res.status(200).json({ message: "Birth data deleted successfully" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: "Failed to delete Birth data" });
  }
};
