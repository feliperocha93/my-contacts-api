const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Felipe Rocha de Lucena',
    email: 'fee.rocha@hotmail.com',
    phone: '11999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Lebron James',
    email: 'lj@nike.com',
    phone: '947-8736',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
