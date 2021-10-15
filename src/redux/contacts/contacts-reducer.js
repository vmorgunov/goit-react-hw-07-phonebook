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

const isLoading = createReducer(false, {
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

const error = createReducer(null, {
  [contactsAction.fetchContactError]: (_, { payload }) => payload,
  [contactsAction.addContactError]: (_, { payload }) => payload,
  [contactsAction.deleteContactError]: (_, { payload }) => payload,
  [contactsAction.fetchContactRequest]: () => null,
  [contactsAction.addContactRequest]: () => null,
  [contactsAction.deleteContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
