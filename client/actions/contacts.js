
export const addContact = contact => ({
  type: 'ADD_CONTACT',
  contact
});

export const startAddContact = (contactData = {}) => {
  // return function to access dispatch method as argument from redux store
  return (dispatch, getState) => {
    // get state of store to get user id
    const uid = getState().auth.uid;

    // destructuring properties from contactData
    // const for every name in obj (const description = ''; const note = '')
    const {description = '', note = '', amount = 0, createdAt = 0} = contactData;

    const contact = {description, note, amount, createdAt};

    // push into Firebase and get back generated ID of contact, return promise
    return database.ref(`users/${uid}/contact`).push(contact).then((ref) => {
      // dispatch contact into redux store by passing an contact into addContact func
      dispatch(addContact({id: ref.key, ...contact}));
    })
  };
};

export const removeContact = ({id} = {}) => {
  return ({type: 'REMOVE_CONTACT', id})
};

export const startRemoveContact = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return  database.ref(`users/${uid}/contacts/${id}`).remove().then(() => {
      dispatch(removeContact({id}));
    });
  }
};

export const editContact = (id, updates = {}) => {
  return ({type: 'EDIT_CONTACT', id, updates});
};

export const startEditContact = (id, updates = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/contacts/${id}`).update(updates).then(() => {
      dispatch(editContact(id, updates))
    })
  }
};

export const setContacts = contacts => ({
  type: 'SET_CONTACTS',
  contacts
});


export const startSetContact = () => {
  // return function to access dispatch method as argument from redux store
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // return function to access promise chaining further
    return database.ref(`users/${uid}/contacts`).once('value').then((snapshot) => {
      const contacts = [];
      snapshot.forEach((childSnapshot) => {
        contacts.push(({
          id: childSnapshot.key,
          ...childSnapshot.val()
        }))
      });
      // dispatch contact into redux store by passing an contact into addContact func
      dispatch(setContacts(contacts));
    });
  };
};


