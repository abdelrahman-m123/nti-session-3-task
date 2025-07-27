
const fs = require('fs').promises;

async function  listContacts() {
    const data = await fs.readFile('../data/contacts.json');
    const contacts = JSON.parse(data);
    return contacts;
}

listContacts().then((msg)=> console.log(msg));



module.exports = listContacts;