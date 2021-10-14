import React from 'react';
import { Label, Input } from './Filter.styled';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/contacts';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Filter contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

const mapStateToProps = ({ contacts }) => ({
  value: contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
