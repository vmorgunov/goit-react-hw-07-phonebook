import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Titel, Button, List, Item } from './ContactList.styled';
import { BsFillPersonFill, BsFillTrashFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import {
  getFilteredContacts,
  deleteContact,
  fetchContact,
} from 'redux/contacts/';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  const onDeleteContacts = id => dispatch(deleteContact(id));
  return (
    <>
      <Titel>Contacts</Titel>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id} id={id}>
            <BsFillPersonFill />
            <span>{name}:</span> <span>{number}</span>
            <Button
              type="button"
              onClick={() => {
                onDeleteContacts(id);
              }}
            >
              <BsFillTrashFill />
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
