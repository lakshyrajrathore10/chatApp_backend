const express = require("express");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

app.use("/api/messages", messageRoutes);

app.use(errorHandler);

module.exports = app;
