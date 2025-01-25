import readContacts from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error counting contacts', error.message);
  }
};

console.log(await countContacts());
