import TableRows from './TableRows';

type propsType = {
  data: any[],
  headers: string[]
}

function ListTable(props: propsType) {

  const headers = props.headers.map((title, index) => {
    return (
      <div
        className='table-cell text-white text-left bg-purple-400 text-xl  p-4 pl-0 first:pl-2 last:pr-2'
        key={`${title}${index}`}
      >
        {title}
      </div>
    );
  })

  const rows = props.data.map((item, index) => (
    <TableRows
      key={`${item.name}${index}`}
      item={item}
    />
  ));

  return (
    <div className='relative overflow-x-auto shadow-md rounded-xl w-full'>
      <div className=' table border-collapse w-full'>
        <div className='table-header-group'>
          {headers}
        </div>
        <div className='table-row-group'>
          {rows}
        </div>
      </div>
    </div>
  )
}

export default ListTable;
