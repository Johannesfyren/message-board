const {Router} = require('express')
const messageRouter = Router();

const messageController = require('../controllers/messageController')

messageRouter.get('/', (req, res) => {
    res.render('form');
})

messageRouter.post('/', messageController.postMessage);
    

messageRouter.get('/:messageID', messageController.getSingleMessage)

module.exports = messageRouter;