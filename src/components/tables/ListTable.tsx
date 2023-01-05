import { useState } from 'react';
type propsType = {
  data: {}[],
  field: any,
}

function ListTable(props: propsType) {

  const mappedList = props.data.map((item: any, index: number) => <props.field key={`${item.name}${index}`} item={item} />);

  return (
    <>
      {mappedList}
    </>
  )
}

export default ListTable;
