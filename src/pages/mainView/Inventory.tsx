import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import InventoryItemType from '../../types/InventoryItemType';
import { USERS, createInventoryData } from '../../utils/faker';
import { capitalise } from '../../components/tables/tableHelper';
import Title from '../../ui/Title';

function Inventory() {
  const [data, setData] = useState<InventoryItemType[]>([]);
  const [headers, setHeaders] = useState<string[]>([])

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
    <div className='container h-full flex w-full flex-col overflow-auto'>
      <Title>Inventory</Title>
      <div className='border-2 border-purple-100 mt-2'></div>
      <ListTable
        data={data}
        headers={headers}
      />
      <div className='container my-2 pt-2 px-2 w-full flex flex-row justify-items-stretch items-center'>
        <CreateNewListItem
          setState={setData}
          headers={headers}
        />
      </div>
    </div>
  )
}

export default Inventory;
