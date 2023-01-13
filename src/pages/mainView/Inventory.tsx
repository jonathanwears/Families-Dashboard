import { useEffect, useState } from 'react';
import InventoryFields from '../../components/inventory/InventoryFields';
import { mockInventoryData } from '../../mockData/mockInventoryData';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import NewInventoryItem from '../../components/inventory/NewInventoryItem';
import InventoryItemType from '../../components/inventory/InventoryItem';
import { USERS, createInventoryData } from '../../utils/faker';

function Inventory() {
  const [data, setData] = useState<InventoryItemType[]>([]);
  //render props
  // fowardref

  useEffect(() => {
    createInventoryData();
    setData(USERS)
  })

  return (
    <>
      <div role='inventory-list'>
        <ListTable
          data={data}
          field={InventoryFields}
        />
        <CreateNewListItem
          setState={setData}
          formFields={NewInventoryItem}
        />
      </div>
    </>
  )
}

export default Inventory;
