const {Router} = require('express')
const indexRouter = Router();
const messageController = require("../controllers/messageController")
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];



indexRouter.get('/', messageController.getMessages);





module.exports = {indexRouter, messages};