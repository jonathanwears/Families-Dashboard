import ReactDOM from 'react-dom/client';

import CreateNewInventoryItem from './components/tables/CreateNewListItem';
import Inventory from './pages/mainView/Inventory';
import Tasks from './pages/mainView/Tasks';
import QuickPanel from './pages/quickPanel/QuickPanel';
function App() {

  return (
    <div className='grid grid-cols-6 grid-rows-6 grid-flow-col m-auto gap-2 bg-gradient-to-br from-zinc-100 via-yellow-50 to-indigo-50 h-screen w-screen'>
      <div className='col-span-1 row-span-6 bg-red-100 rounded-tr-lg'>
        extra div
      </div>
      <div className='col-span-5 row-span-5 flex justify-center bg-white rounded-lg'>
        <Inventory />
      </div>
      <div className='col-span-5 row-span-1'>
        < QuickPanel />
      </div>
    </div>
  )
}

export default App
