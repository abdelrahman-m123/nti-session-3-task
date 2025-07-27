
const listContacts = require('./listContact');
const path = require("path");
const fs = require('fs').promises;
const filePath = path.join(__dirname, "../data/contacts.json");

async function removeContact(id){
    try{
        const contacts = await listContacts();
        const index = contacts.findIndex((contact)=> {
            return contact.id ===id;
        });

        if (index === -1) {
            console.log("invalid id");
            return;
        }

        contacts.splice(index, 1);
        await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
        console.log("deleted successfully");
        

    }catch(error){
        console.log(error.message);
        
    }
}

removeContact(2);

module.exports = removeContact;