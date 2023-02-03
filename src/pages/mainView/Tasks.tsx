import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import { capitalise } from '../../components/tables/tableHelper';
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
      <h1 className='text-4xl font-sans subpixel-antialiased font-normal pl-4 pt-4 bg-white rounded-sm'>Tasks</h1>
      <div className='mt-2 border-2 border-purple-100' />
      <div className='container pt-2 flex flex-col h-full w-full overflow-hidden'>
        <ListTable
          data={data}
          headers={headers}
        />
        <div className='container shadow-lg opacity-70 rounded-lg my-6 py-2 px-4 bg-gray-100 w-full flex flex-row justify-items-stretch items-center'>
          <CreateNewListItem
            headers={headers}
            setState={setData}
          />
        </div>
      </div>
    </>
  )
}

export default Tasks;
