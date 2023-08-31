const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { readData, writeData } = require("../shared");
require("dotenv").config();

const filePath = path.join(__dirname, "..", "database", "users.json");

exports.Signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const UsersData = readData(filePath);
    const isEmailExist = UsersData.find((user) => user.email === email);

    if (isEmailExist) {
      return res.status(409).json({ massege: "Email is already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    UsersData.push({
      id: uuidv4(),
      fullName,
      email,
      password: hashPassword,
    });
    writeData(filePath, UsersData);
    return res.status(201).json({
      message: "user created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const UsersData = readData(filePath);
    const user = UsersData.find((user) => user.email === email);

    if (!user) {
      return res.status(409).json({ message: "Email doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(202).json({ message: "Password doesn't correct" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SECRET_TOKEN,
      {
        expiresIn: "1h",
      }
    );

    return res.status(201).json({
      token,
      fullName: user.fullName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
