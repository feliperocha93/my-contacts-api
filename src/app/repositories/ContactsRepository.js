const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Felipe Rocha de Lucena',
    email: 'fee.rocha@hotmail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
