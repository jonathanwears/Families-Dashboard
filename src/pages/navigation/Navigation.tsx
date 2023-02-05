import { Link } from 'react-router-dom';
import TaskIcon from '../../icons/task';
import InventoryIcon from '../../icons/InventoryIcon';
import UserIcon from '../../icons/UserIcon';

function Navigation() {
  return (
    <div className='flex flex-col h-full border-r-2 bg-slate-100 border-purple-200 p-2 divide-y'>
      <h1 className='text-4xl text-stone-700 tracking-tight font-sans subpixel-antialiased  pt-4 bg-white rounded-sm'>Families</h1>
      <div className='flex flex-row'><span className='p-2'>{<UserIcon />}</span>User</div>
      <div className='flex flex-col divide-y'>
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
    </div >
  )
}

export default Navigation;

