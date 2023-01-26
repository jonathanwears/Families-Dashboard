import { useEffect, useState } from 'react';
import { FormControl } from '@mui/material';
import InventoryFields from '../../components/inventory/InventoryFields';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import NewInventoryItem from '../../components/inventory/NewInventoryItem';
import InventoryItemType from '../../types/InventoryItemType';
import { USERS, createInventoryData } from '../../utils/faker';

function Inventory() {
  const [data, setData] = useState<InventoryItemType[]>([]);
  //render props
  // fowardref

  useEffect(() => {
    createInventoryData();
    setData(USERS)
  }, [])

  return (
    <>
      <div role='inventory-list'>
        <ListTable
          data={data}
          field={InventoryFields}
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
