import QuickPanel from './quickPanel/QuickPanel';
function QuickView() {

  return (
    <div
      className='shadow-xl flex flex-col border-2 rounded-md w-full h-full border-purple-200 bg-slate-100   dark:border-slate-800  dark:bg-slate-800'
    >
      <QuickPanel />
    </div>
  )
}

export default QuickView;
