import { faker } from '@faker-js/faker/locale/en_GB';
import InventoryItemType from '../components/inventory/InventoryItem'
import TasksItemType from '../components/tasks/TasksItemType';

export const USERS: InventoryItemType[] = [];

export function createInventoryData(): InventoryItemType {
  return {
    name: faker.name.firstName(),
    'belongs to': faker.name.firstName(),
    'current location': faker.address.streetAddress(),
  }
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createInventoryData());
})

export const TASKS: TasksItemType[] = [];

export function createTasksData(): TasksItemType {
  return {
    name: faker.name.firstName(),
    date: String(faker.date.soon()),
    location: faker.address.streetAddress(),
  }
}

Array.from({ length: 10 }).forEach(() => {
  TASKS.push(createTasksData());
})