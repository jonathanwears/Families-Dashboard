import { useState } from 'react';
import InventoryFields from '../../components/inventory/InventoryFields';
import { mockInventoryData } from '../../mockInventoryData';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import NewInventoryItem from '../../components/inventory/NewInventoryItem';

function Inventory() {
  const [data, setData] = useState(mockInventoryData);
  //render props
  // fowardref
  return (
    <>
      <div role='inventory-list'>
        <ListTable
          data={data}
          field={InventoryFields}
        />
        <CreateNewListItem
          setInventory={setData}
          formFields={NewInventoryItem}
        />
      </div>
    </>
  )
}

export default Inventory;
