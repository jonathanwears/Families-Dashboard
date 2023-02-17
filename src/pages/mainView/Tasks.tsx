import { useEffect, useState } from 'react';
import { useDidUpdate } from 'rooks';
import ListTable from '../../components/tables/ListTable';
import { capitalise } from '../../components/tables/tableHelper';
import CreateNewListItem from '../../components/tables/CreateNewListItem';
import TasksItemType from '../../types/TasksItemType';
import Title from '../../ui/Title';
import { motion } from 'framer-motion';
import useTasksStore from '../../utils/useTasksStore';

function Tasks() {
  const tasks = useTasksStore((state) => state.tasks)
  const setTasks = useTasksStore((state) => state.addLine)
  const [data, setData] = useState<TasksItemType[]>([])
  const [headers, setHeaders] = useState<string[]>([])

  useEffect(() => {
    setData(tasks);
  }, [tasks])

  useDidUpdate(() => {
    const headers = Object.keys(data[0])
    const capHeaders = headers.map((header) => capitalise(header))
    setHeaders(capHeaders)
  }, [data])

  return (
    <motion.div
      className='container h-full flex w-full flex-col'
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}

    >
      <Title>Tasks</Title>
      <div className='mt-2 border-2 border-purple-100 dark:border-slate-200' />
      <ListTable
        data={data}
        headers={headers}
      />
      <div className='container my-2 pt-2 px-2 w-full flex flex-row justify-items-stretch items-center'>
        <CreateNewListItem
          headers={headers}
          setState={setTasks}
        />
      </div>
    </motion.div>
  )
}

export default Tasks;
