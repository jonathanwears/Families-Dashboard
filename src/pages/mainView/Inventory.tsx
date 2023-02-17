import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import InventoryItemType from '../../types/InventoryItemType';
import { capitalise } from '../../components/tables/tableHelper';
import Title from '../../ui/Title';
import { motion } from 'framer-motion';
import useInventoryStore from '../../utils/useInventoryStore';

function Inventory() {
  const inventory = useInventoryStore((state) => state.inventory);
  const [data, setData] = useState<InventoryItemType[]>([]);
  const [headers, setHeaders] = useState<string[]>([])

  useEffect(() => {
    setData(inventory)
  }, [data])

  useDidUpdate(() => {
    const headers = Object.keys(data[0])
    const capHeaders = headers.map((header) => capitalise(header))
    setHeaders(capHeaders)
  }, [data])

  return (
    <motion.div
      className='container h-full flex w-full flex-col overflow-auto'
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Title>Inventory</Title>
      <div className='border-2 border-purple-100 dark:border-slate-200 mt-2'></div>
      <ListTable
        data={data}
        headers={headers}
      />
      <div className='container my-2 pt-2 px-2 w-full flex flex-row justify-items-stretch items-center'>
        <CreateNewListItem
          headers={headers}
          setState={setData}
        />
      </div>
    </motion.div>
  )
}

export default Inventory;
