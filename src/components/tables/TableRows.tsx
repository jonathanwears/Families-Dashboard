interface itemProps {
  item: any
}

function TableRows({ item }: itemProps) {

  const keys = Object.keys(item)

  const cells = keys.map((key) => {
    return (
      <div className='table-cell text-sm p-2 h-[80px] hover:bg-slate-100 text-left max-w-xs first:pl-2 last:pr-2'>
        {item[key]}
      </div>
    )
  })

  return (
    <div className='table-row even:bg-violet-50'>
      {cells}
    </div>
  )
}

export default TableRows;
