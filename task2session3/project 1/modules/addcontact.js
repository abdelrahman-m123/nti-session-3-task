const listContacts = require('./listContact');
const fs = require('fs').promises;
const path = require("path");
const filePath = path.join(__dirname, "../data/contacts.json");

async function addContact(contact){
    try{
        let contacts = await listContacts();
        contacts.push(contact);
        await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
        console.log("success");
        
    }catch(error){
        console.log(error.message);
        
    }
}

module.exports = addContact;