const {Router} = require('express')
const messageRouter = Router();

const {messages} = require('./indexRouter')

messageRouter.get('/', (req, res) => {
    res.render('form');
})

messageRouter.post('/', (req, res) => {
    
    messages.push({ text: req.body.text, user: req.body.name, added: new Date() });
    res.redirect("/")
})

messageRouter.get('/:messageID', (req, res) => {
    res.render('singleMess', {id: req.params.messageID, message:messages});
})

module.exports = messageRouter;