import { Route, Routes, Navigate } from "react-router-dom";
import Inventory from '../mainView/Inventory';
import Tasks from '../mainView/Tasks';

function MainView() {

  return (
    <div className='flex flex-col border-2 shadow-xl rounded-sm w-full h-full border-purple-200 bg-slate-100 '>
      <Routes>
        <Route index path="/tasks" element={<Tasks />} />
        <Route path="/inventory" index element={<Inventory />} />
        <Route path='/' element={<Navigate to='/inventory' />} />
      </Routes>
    </div>
  )
}

export default MainView;
