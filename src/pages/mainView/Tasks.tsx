import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import { capitalise } from '../../components/tables/tableHelper';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import TasksItemType from '../../types/TasksItemType';
import { TASKS, createTasksData } from '../../utils/faker';
import Title from '../../ui/Title';

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
    <div className='container h-full flex w-full flex-col'>
      <Title>Tasks</Title>
      <div className='mt-2 border-2 border-purple-100 dark:border-slate-200' />
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
    </div>
  )
}

export default Tasks;
