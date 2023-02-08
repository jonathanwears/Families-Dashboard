import NavigationBar from '../../components/navigation/NavigationBar';
import UserBox from '../../components/navigation/UserBox';

function Navigation() {
  return (
    <div className='flex flex-col h-full border-r-2  dark:text-slate-200 bg-slate-100 border-purple-200 divide-y dark:border-slate-800  dark:bg-slate-800 '>
      {<UserBox />}
      {<NavigationBar />}
    </div >
  )
}

export default Navigation;

