const path = require("path");
const fs = require('fs').promises;
const filePath = path.join(__dirname, "../data/contacts.json");

async function  listContacts() {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
}

listContacts().then((msg)=> console.log(msg));



module.exports = listContacts;
