import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import { capitalise } from '../../components/tables/tableHelper';
import TasksFields from '../../components/tasks/TasksFields';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import TasksItemType from '../../types/TasksItemType';
import { TASKS, createTasksData } from '../../utils/faker';

function Tasks() {
  const [data, setData] = useState<TasksItemType[]>([])
  const [headers, setHeaders] = useState<string[]>([])

  useEffect(() => {
    createTasksData();
    setData(TASKS);
  }, [])

  useDidUpdate(() => {
    const headers = Object.keys(data[0])
    const capHeaders = headers.map((header) => capitalise(header))
    setHeaders(capHeaders)
  }, [data])

  return (
    <>
      <div className='container pt-2 h-full flex w-full flex-col  overflow-auto'>
        <ListTable
          data={data}
          headers={headers}
        />
        <CreateNewListItem
          headers={headers}
          setState={setData}
        />
      </div>
    </>
  )
}

export default Tasks;
