import { BrowserRouter } from "react-router-dom";
import Navigation from './pages/navigation/Navigation';
import MainView from './pages/mainView/MainView';
import QuickView from './pages/QuickView';
function App() {

  return (
    <BrowserRouter>
      <div className='grid grid-cols-5 grid-rows-5 grid-flow-col m-auto bg-indigo-50 h-screen w-screen'>
        <div className='col-span-1 row-span-6'>
          <Navigation />
        </div>
        <div className='col-span-6 row-span-4'>
          <div className='p-2 w-full h-full'>
            <MainView />
          </div>
        </div>
        <div className='col-span-6 row-span-2'>
          <div className='p-2 w-full h-full'>
            <QuickView />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
