
const listContacts = require('./listContact');
const path = require("path");
const fs = require('fs').promises;
const filePath = path.join(__dirname, "../data/contacts.json");

async function searchContact(id){
    try{
        const contacts = await listContacts();
        const index = contacts.findIndex((contact)=> {
            return contact.id ===id;
        });
        
        
        if (index === -1) {
            console.log("invalid id");
            return;
        }

        return contacts[index];
    }catch(error){
        console.log(error.message);
        
    }
}

console.log(searchContact(1));

module.exports = searchContact;
