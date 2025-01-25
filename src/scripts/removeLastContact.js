import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();
    if (existingContacts.length > 0) {
      existingContacts.pop();
      await writeContacts(existingContacts);
      console.log('Last contact removed');
    } else {
      console.log('No contacts to remove');
    }
  } catch (error) {
    console.error('Error removing last contact', error.message);
  }
};

removeLastContact();
