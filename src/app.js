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

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MobileChat backend is running",
    endpoints: {
      postMessage: "/message",
      getMessages: "/messages",
      compatibility: "/api/messages",
    },
  });
});

app.post("/message", messageRoutes);
app.get("/messages", messageRoutes);
app.use("/api/messages", messageRoutes);

app.use(errorHandler);

module.exports = app;
