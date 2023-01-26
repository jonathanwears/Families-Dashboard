
// later import catagories from file
import { USERS, TASKS, createInventoryData, createTasksData } from './faker';

export default async function getTypeData(type: string) {
  if (type === 'Tasks') {
    createTasksData()
    return TASKS
  } else if (type === 'Inventory') {
    createInventoryData();
    return USERS;
  }
}
