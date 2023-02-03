import ReactDOM from 'react-dom/client';
import CreateNewInventoryItem from './components/tables/CreateNewListItem';
import Inventory from './pages/mainView/Inventory';
import Tasks from './pages/mainView/Tasks';
import QuickPanel from './pages/quickPanel/QuickPanel';
function App() {

  return (
    <div className='grid grid-cols-5 grid-rows-5 grid-flow-col m-auto gap-2 bg-indigo-50 h-screen w-screen'>
      <div className='col-span-1 row-span-6 bg-red-100 rounded-tr-lg'>
        extra div
      </div>
      <div className='col-span-5 row-span-4 justify-center shadow-xl rounded-sm border-2 border-purple-200'>
        <div className='w-full h-full flex flex-col'>
          <Tasks />
        </div>
      </div>
      <div className='col-span-5 row-span-2 flex justify-center pb-2 w-100 mx-4'>
        < QuickPanel />
      </div>
    </div>
  )
}

export default App;
