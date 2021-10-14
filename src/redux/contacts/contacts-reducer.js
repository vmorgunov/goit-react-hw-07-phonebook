import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsAction from './contacts-action';

const initialState = [];

const items = createReducer(initialState, {
  [contactsAction.fetchContactSuccess]: (_, { payload }) => payload,
  [contactsAction.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsAction.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [contactsAction.fetchContactRequest]: () => true,
  [contactsAction.fetchContactSuccess]: () => false,
  [contactsAction.fetchContactError]: () => false,
  [contactsAction.addContactRequest]: () => true,
  [contactsAction.addContactSuccess]: () => false,
  [contactsAction.addContactError]: () => false,
  [contactsAction.deleteContactRequest]: () => true,
  [contactsAction.deleteContactSuccess]: () => false,
  [contactsAction.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [contactsAction.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
