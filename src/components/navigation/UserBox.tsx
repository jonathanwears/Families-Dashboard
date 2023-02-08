import UserIcon from '../../icons/UserIcon';

function UserBox() {

  return (
    <div className='bg-white px-2 flex flex-col items-center dark:bg-slate-900'>
      <h1 className='text-4xl text-stone-700  dark:text-white tracking-tight font-sans subpixel-antialiased  p-4 bg-inherit rounded-sm'>Families</h1>
      <div className='flex flex-row items-center pb-4 pr-3'>
        <span className='p-2'>
          {<UserIcon />}
        </span>
        <p className='text-2xl font-medium'>
          User
        </p>
      </div>
    </div>
  )
}

export default UserBox;