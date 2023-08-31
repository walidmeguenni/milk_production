const fs = require("fs");
exports.readData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading Milk.json:", error);
    return [];
  }
};
exports.writeData = (filePath, Data) => {
  fs.writeFileSync(filePath, JSON.stringify(Data, null, 2), "utf-8");
};
