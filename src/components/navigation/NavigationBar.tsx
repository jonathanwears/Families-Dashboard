import TaskIcon from '../../icons/taskIcon';
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
