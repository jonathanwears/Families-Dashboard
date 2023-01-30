
import CreateNewInventoryItem from './components/tables/CreateNewListItem';
import Inventory from './pages/mainView/Inventory';
import Tasks from './pages/mainView/Tasks';
import QuickPanel from './pages/quickPanel/QuickPanel';
function App() {

  return (
    <div className=' bg-gradient-to-br from-yellow-50 to-yellow-100'>
      < QuickPanel />
      <Inventory />
    </div >)
}

export default App
