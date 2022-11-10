import FieldComponent from '../FieldComponent';

function Inventory({ items }) {


  const list = items.map((item: any, index: number) => <FieldComponent key={`${item.name}${index}`} item={item} />);

  return (
    <div role='inventory-list'>
      {list}
    </div>
  )
}

export default Inventory;
