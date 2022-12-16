import React, { HTMLInputTypeAttribute, useReducer, useState } from 'react';
import NewInventoryItem from './NewInventoryItem';

interface InventoryProps {
  setInventory: (prevValue: any) => void;
}

function CreateNewInventoryItem({ setInventory }: InventoryProps) {
  const [newItem, setNewItem] = useState({});


  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewItem((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }))
  }

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setInventory((prevValue: any) => ([
      ...prevValue,
      newItem,
    ]));
  }

  return (
    <form onSubmit={onSubmit}>
      <NewInventoryItem onChange={onChange} />
      <input type='submit' />
    </form>
  );
}

export default CreateNewInventoryItem;
