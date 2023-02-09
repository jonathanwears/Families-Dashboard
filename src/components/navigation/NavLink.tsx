import { Link } from 'react-router-dom';

type PropTypes = {
  to: string,
  icon: React.ReactNode,
  name: string,
}

function NavLink(props: PropTypes) {

  return (
    <Link
      className='flex flex-row items-center p-2 py-4 text-xl hover:bg-purple-100 dark:hover:bg-purple-700 rounded-md'
      to={props.to}
    >
      <span className='pr-2'>
        {props.icon}
      </span>
      {props.name}
    </Link>
  )
}

export default NavLink;
