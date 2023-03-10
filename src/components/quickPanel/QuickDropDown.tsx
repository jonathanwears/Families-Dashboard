
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
    <div className='w-full mt-0 px-3 mb-6 md:mb-0 container rounded-lg my-6 py-2 '>
      <label
        className='block uppercase tracking-wide dark:text-slate-400 text-xs font-bold mb-2'
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className='appearance-none block bg-gray-100 dark:text-slate-200 dark:bg-gray-700 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-slate-900 focus:bg-white focus:ring-purple-500 focus:border-purple-500 w-full p-2.5 d'
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
