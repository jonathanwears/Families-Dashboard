import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
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
    <div role='inventory-list' className='container pt-2 h-full flex w-full flex-col  overflow-auto'>
      <ListTable
        data={data}
        headers={headers}
      />
      <CreateNewListItem
        setState={setData}
        headers={headers}
      />
    </div>
  )
}

export default Inventory;
