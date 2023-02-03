import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Button from '../../ui/Button';

type TableProps = {
  headers: string[],
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

  /* 
   <TextField
          key={`${header}${index}`}
          sx={{ m: 1, minWidth: 200 }}
          id='outlined-basic'
          label={header}
          name={header}
          variant='outlined'
          onChange={onChange}
        />
        */

  const inputs = props.headers.map((header) => {
    return (
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={header}
        >
          {header}
        </label>
        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id={header}
          type="text"
          placeholder={header}
          onChange={onChange}
        />
      </div>
    )
  })

  return (
    <>
      {inputs}
      <div className='pt-2'>
        <Button title='Submit' onClick={() => console.log("hello")} />
      </div>
    </>
  );
}

export default CreateNewListItem;
