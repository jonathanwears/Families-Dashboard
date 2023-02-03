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
    <div className='container pt-2 h-full flex w-full flex-col  overflow-auto'>
      <Title>Inventory</Title>
      <div className='border-2 border-purple-200 mb-2'></div>
      <ListTable
        data={data}
        headers={headers}
      />
      <div className='container shadow-lg opacity-70 rounded-lg my-6 py-2 px-4 bg-gray-100 w-full flex flex-row justify-items-stretch items-center'>
        <CreateNewListItem
          setState={setData}
          headers={headers}
        />
      </div>
    </div>
  )
}

export default Inventory;
