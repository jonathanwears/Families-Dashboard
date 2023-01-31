import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import { FormControl } from '@mui/material';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import NewInventoryItem from '../../components/inventory/NewInventoryItem';
import InventoryItemType from '../../types/InventoryItemType';
import { USERS, createInventoryData } from '../../utils/faker';
import { capitalise } from '../../components/tables/tableHelper';

function Inventory() {
  const [data, setData] = useState<InventoryItemType[]>([]);
  const [headers, setHeaders] = useState<string[]>([])
  //render props
  // fowardref

  useEffect(() => {
    createInventoryData();
    setData(USERS)
  }, [])

  useDidUpdate(() => {
    const headers = Object.keys(data[0])
    const capHeaders = headers.map((header) => capitalise(header))
    setHeaders(capHeaders)
  }, [data])

  return (
    <>
      <div role='inventory-list' className='container mx-auto flex flex-col items-center justify-center'>
        <ListTable
          data={data}
          headers={headers}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <CreateNewListItem
            setState={setData}
            formFields={NewInventoryItem}
          />
        </FormControl>
      </div>
    </>
  )
}

export default Inventory;
