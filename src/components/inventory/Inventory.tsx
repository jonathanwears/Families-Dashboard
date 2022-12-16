import { useState } from 'react';
import FieldComponent from '../FieldComponent';
import { mockInventoryData } from '../../mockInventoryData';
import CreateNewInventoryItem from './CreateNewInventoryItem';

function Inventory() {
  const [inventory, setInventory] = useState(mockInventoryData);
  const list = inventory.map((item: any, index: number) => <FieldComponent key={`${item.name}${index}`} item={item} />);

  return (
    <>
      <div role='inventory-list'>
        {list}
      </div>
      <div>
        <CreateNewInventoryItem setInventory={setInventory} />
      </div>
    </>
  )
}

export default Inventory;
