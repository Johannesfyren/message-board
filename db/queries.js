const db = require("./pool")

async function getMessages() {
    const { rows } = await db.query ("SELECT * FROM messages");
    return rows;
}

async function postMessage(user, message){
    await db.query("INSERT INTO messages (username, message) VALUES ($1, $2)",[user, message])
}

async function getSingleMessage(messageID) {
    const { rows } = await db.query ("SELECT * FROM messages WHERE id = $1", [messageID]);
    return rows;
}

module.exports = {
    getMessages,
    postMessage,
    getSingleMessage,

}