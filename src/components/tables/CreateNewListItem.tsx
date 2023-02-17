import React, { useState } from 'react';
import Button from '../../ui/Button';

type TableProps = {
  headers: string[],
  setState: (value: any) => void,
}

function CreateNewListItem(props: TableProps) {
  const [newItem, setNewItem] = useState();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const key = event.target.name.toLowerCase();
    setNewItem((prevValue: any) => ({
      ...prevValue,
      [key]: event.target.value,
    }))
  }

  const inputs = props.headers.map((header) => {
    return (
      <div
        key={header}
        className="w-full md:w-1/2 px-3 mb-6 md:mb-0"
      >
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-slate-400 "
          htmlFor={header}
        >
          {header}
        </label>
        <input className="appearance-none block w-full dark:text-slate-200 dark:bg-gray-700  dark:focus:bg-slate-900 bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id={header}
          type="text"
          placeholder={header}
          onChange={onChange}
          name={header}
        />
      </div>
    )
  })

  return (
    <>
      {inputs}
      <div className='pt-2'>
        <Button title='Submit' onClick={() => props.setState(newItem)} />
      </div>
    </>
  );
}

export default CreateNewListItem;
