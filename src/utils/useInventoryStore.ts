import { create } from 'zustand';
import Inventory from '../pages/mainView/Inventory';
import InventoryItemType from '../types/InventoryItemType';
import { createInventoryData, USERS } from './faker';

type DataState = {
  inventory: InventoryItemType[],
  addLine: (newLine: any) => void
}

createInventoryData()
const useInventoryStore = create<DataState>((set) => ({
  inventory: [
    ...USERS
  ],

  addLine: (newLine) => set(({ inventory }) => ({
    inventory: [
      ...inventory,
      { ...newLine }
    ]
  }))

}))

export default useInventoryStore;
