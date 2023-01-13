type propsType = {
  data: any[],
  field: React.ElementType,
}

function ListTable(props: propsType) {

  const mappedList = props.data.map((item, index) => <props.field key={`${item.name}${index}`} item={item} />);

  return (
    <>
      {mappedList}
    </>
  )
}

export default ListTable;
