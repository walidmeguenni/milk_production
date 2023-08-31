const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routers/user");
const cowRouter = require("./routers/cow");
const examinationsRouter = require("./routers/examinations");
const milkRouter = require("./routers/milk");
const birthRouter = require("./routers/birth");
const infoRouter = require("./routers/Info");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("uploads", express.static("uploads"));

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", userRouter);
app.use("/cow", cowRouter);
app.use("/examination", examinationsRouter);
app.use("/milk", milkRouter);
app.use("/birth", birthRouter);
app.use("/info", infoRouter);

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

//-----------------------------Handling errors---------------------//
app.use((req, res, next) => {
  const error = new Error(`error 404 rout not found`);
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
