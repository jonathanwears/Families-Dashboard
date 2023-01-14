import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import QuickDropDown from '../../components/quickPanel/QuickDropDown';

function QuickPanel() {
  const [store, setStore] = useState<string>('');
  function handleOnChange(event: SelectChangeEvent) {
    console.log("hello")
    setStore(event.target.value)
  }

  const items = ['Inventory', 'Tasks']
  return (
    <>
      <QuickDropDown
        value={store}
        handleOnChange={handleOnChange}
        labelId='type-label'
        label='type'
        menuItems={items}
      />
    </>
  )
}

export default QuickPanel;

