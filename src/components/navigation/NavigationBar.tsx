import { Link } from 'react-router-dom';
import TaskIcon from '../../icons/task';
import InventoryIcon from '../../icons/InventoryIcon';

function NavigationBar() {

  return (
    <div className='flex flex-col divide-y p-2'>

      <Link
        className='p-2 pb-4 text-xl flex flex-row items-center'
        to='/tasks'>
        <span
          className='pr-2'>
          {<TaskIcon />}
        </span>
        Tasks
      </Link>
      <Link
        className=' flex flex-row items-center p-2 text-xl'
        to='/'>
        <span className='pr-2'>
          {<InventoryIcon />}
        </span>
        Inventory
      </Link>
    </div>

  )
}

export default NavigationBar;
