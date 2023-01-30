import { FormControl } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../ui/Button';

type TableProps = {
  formFields: React.ComponentType,
  setState: any,
}

function CreateNewListItem(props: TableProps) {
  const [newItem, setNewItem] = useState();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewItem((prevValue: any) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }))
  }

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    props.setState((prevValue: any) => ([
      ...prevValue,
      newItem,
    ]));
  }

  return (
    <>
      <FormControl
        variant="standard"
        onSubmit={onSubmit}
      >
        <props.formFields
          onChange={onChange}
        />
      </FormControl >
      <Button title='Submit' onClick={() => console.log("hello")} />
    </>
  );
}

export default CreateNewListItem;
