import TasksItemType from '../../types/TasksItemType';

type FieldsProps = {
  item: TasksItemType
}

function TasksFields(props: FieldsProps) {

  return (
    <li>
      <p>{props.item.name}</p>
      <p>{props.item.date}</p>
      <p>{props.item.location}</p>
      <p>{props.item.details}</p>
    </li>
  )
}

export default TasksFields
