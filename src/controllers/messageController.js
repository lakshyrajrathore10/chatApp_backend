const Message = require("../models/Message");

const postMessage = async (req, res, next) => {
  try {
    const { username, message } = req.body;

    const trimmedUsername = username?.trim?.() ?? "";
    const trimmedMessage = message?.trim?.() ?? "";

    if (!trimmedUsername || !trimmedMessage) {
      return res.status(400).json({
        success: false,
        error: "username and message are required",
      });
    }

    const newMessage = new Message({
      username: trimmedUsername,
      message: trimmedMessage,
    });

    const savedMessage = await newMessage.save();

    res.status(201).json({
      success: true,
      data: savedMessage,
    });
  } catch (error) {
    next(error);
  }
};

const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { postMessage, getMessages };
