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
    <form onSubmit={onSubmit} className=' flex flex-row items-center'>
      <props.formFields
        onChange={onChange}
      />
      <Button title='Submit' onClick={() => console.log("hello")} />
    </form>
  );
}

export default CreateNewListItem;
