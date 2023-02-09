import { Link } from 'react-router-dom';
import TaskIcon from '../../icons/task';
import InventoryIcon from '../../icons/InventoryIcon';
import NavLink from './NavLink';

function NavigationBar() {
  return (
    <div className='flex flex-col pl-2'>
      <NavLink
        to='/'
        icon={<InventoryIcon />}
        name='Inventory'
      />
      <NavLink
        to='/tasks'
        icon={<TaskIcon />}
        name='Tasks'
      />
    </div >
  )
}

export default NavigationBar;
