import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';

type QuickDropDownTypes = {
  value: string,
  handleOnChange: any,
  labelId: string,
  label: string,
  menuItems: string[],
}

function QuickDropDown({ value, handleOnChange, label, menuItems }: QuickDropDownTypes) {

  function renderItems(item: string) {
    return (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    )
  }

  return (
    <div className='w-full mt-0 d:w-1/2 px-3 mb-6 md:mb-0 container opacity-70 rounded-lg my-6 py-2 '>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className='appearance-none block bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-purple-500 focus:border-purple-500 w-full p-2.5 d'
        id={label}
        onChange={handleOnChange}
        value={value}
        aria-label={label}
      >
        {menuItems.map(renderItems)}
      </select>
    </div>
  )
}

export default QuickDropDown;
