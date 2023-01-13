import React, { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <props.formFields
        onChange={onChange}
      />
      <input type='submit' />
    </form>
  );
}

export default CreateNewListItem;
