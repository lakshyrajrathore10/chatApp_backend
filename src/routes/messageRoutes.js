const express = require("express");
const {
  postMessage,
  getMessages,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/", postMessage);
router.get("/", getMessages);

module.exports = router;
