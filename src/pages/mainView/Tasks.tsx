import { useEffect, useState } from 'react';
import ListTable from '../../components/tables/ListTable';
import TasksFields from '../../components/tasks/TasksFields';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import TasksItemType from '../../components/tasks/TasksItemType';
import { TASKS, createTasksData } from '../../utils/faker';
function Tasks() {
  const [TasksData, setTasksData] = useState<TasksItemType[]>([])

  useEffect(() => {
    createTasksData();
    setTasksData(TASKS);
  }, [])

  return (
    <>
      <div className='tasks-list'>
        <ListTable
          data={TasksData}
          field={TasksFields}
        />
        {/* <CreateNewListItem
          formFields={ }
          setState={setTasksData}
        /> */}
      </div>
    </>
  )
}

export default Tasks;
