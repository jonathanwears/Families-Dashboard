import { create } from 'zustand';
import TasksItemType from '../types/TasksItemType';
import { createTasksData, TASKS } from './faker';

type TasksState = {
  tasks: TasksItemType[],
  addLine: (newLine: any) => void
}
createTasksData()

const useTasksStore = create<TasksState>((set) => ({
  tasks: [
    ...TASKS
  ],

  addLine: (newLine) => set(({ tasks }) => ({
    tasks: [
      ...tasks,
      { ...newLine }
    ]
  }))
}))

export default useTasksStore;
