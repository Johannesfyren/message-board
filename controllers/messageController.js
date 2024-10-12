const db = require ("../db/queries");

const getMessages = async (req, res) => {
    const message = await db.getMessages();
    res.render(('messages'), {messages: message});
}

const postMessage = async (req, res) =>{
    const { username, message } = req.body;
    await db.postMessage(username, message)
    res.redirect('/');
}

const getSingleMessage = async (req, res) => {
    const message = await db.getSingleMessage(req.params.messageID);
    //res.send(message)
    res.render('singleMess', {message: message});
}

module.exports = {
    getMessages,
    postMessage,
    getSingleMessage,

}