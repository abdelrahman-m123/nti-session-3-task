const addContact = require('./modules/addContact');
const removeContact = require('./modules/removeContact');
const searchContact = require('./modules/searchContact');
const listContacts = require('./modules/listContact');

async function testPhonebook() {
  try {
    console.log('Initial Contacts');
    listContacts().then((msg)=> console.log(msg));

    console.log('\nAdding New Contacts');
    await addContact({ id: 2, name: 'contact2' });
    await addContact({ id: 4, name: 'contact4' });
    console.log('Added 2 contacts');
    listContacts().then((msg)=> console.log(msg));

    console.log('Searching Contact');
    const foundContact = await searchContact(1);
    console.log('Found contact:', foundContact);

    console.log('\nRemoving Contact');
    await removeContact(3);
    console.log('After removal:');
    listContacts().then((msg)=> console.log(msg));

    console.log('\n Testing Invalid Cases');
    await searchContact(99); 
    await removeContact(99); 

  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testPhonebook();
