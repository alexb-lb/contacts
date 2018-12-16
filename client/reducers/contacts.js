const contactsReducerDefaultState = [
  {
    id: 1,
    name: 'Alexandr Bobrenko',
    email: 'oknerbob@gmailc.om',
    phone: '+38 091 971 13 41',
    debt: '0',
    notes: 'alive',
  },
  {
    id: 2,
    name: 'Jous Vorcklav',
    email: 'jous@gmail.com',
    phone: '+56 082 234 23 45',
    debt: 2000,
    notes: 'alive',
  },
  {
    id: 3,
    name: 'Julius Caesar',
    email: 'caesar@spqr.com',
    phone: 'none',
    debt: 850000,
    notes: 'dead',
  },
  {
    id: 4,
    name: 'Graf Draculo',
    email: '123dragula@transilvania.com',
    phone: '1111111',
    debt: 77777,
    notes: 'always alive',
  },
];

export default (state = contactsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact];
    case 'DELETE_CONTACT':
      return state.filter(({id}) => +id !== +action.id);
    case 'EDIT_CONTACT':
      return state.map((contact, i, arr) => {
        if (action.id === contact.id) {
          return {...contact, ...action.updates};
        } else {
          return contact;
        }
      });
    case 'SET_CONTACTS':
      return action.contacts;
    default:
      return state;
  }
};