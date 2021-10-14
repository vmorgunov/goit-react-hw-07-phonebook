import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'service/contactsAPI';
import * as conctacsAction from './contacts-action';

const fetchContact = () => async dispatch => {
  dispatch(conctacsAction.fetchContactRequest());

  try {
    const data = await fetchContacts();
    dispatch(conctacsAction.fetchContactSuccess(data));
  } catch (error) {
    dispatch(conctacsAction.fetchContactError(error));
  }
};

const addContact = (id, name, number) => async dispatch => {
  dispatch(conctacsAction.addContactRequest());

  try {
    const data = await addContacts(id, name, number);
    dispatch(conctacsAction.addContactSuccess(data));
  } catch (error) {
    dispatch(conctacsAction.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(conctacsAction.deleteContactRequest());
  try {
    await deleteContacts(id);
    dispatch(conctacsAction.deleteContactSuccess(id));
  } catch (error) {
    dispatch(conctacsAction.deleteContactError(error));
  }
};

export { fetchContact, addContact, deleteContact };
