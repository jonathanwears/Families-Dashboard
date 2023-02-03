interface itemProps {
  item: any
}

function TableRows({ item }: itemProps) {

  const keys = Object.keys(item)

  const cells = keys.map((key, index) => {
    return (
      <div className='table-cell text-xs p-2 h-[80px] text-left max-w-xs first:pl-2 last:pr-2'
        key={`${key}${index}`}
      >
        {item[key]}
      </div>
    )
  })

  return (
    <div className='table-row  hover:bg-slate-100 odd:bg-slate-50 even:bg-violet-50'>
      {cells}
    </div>
  )
}

export default TableRows;
