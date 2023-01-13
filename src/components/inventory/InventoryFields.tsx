interface itemProps {
  item: {
    'name': String,
    'belongs to': String,
    'current location': String,
    notes?: String
  }
}

function InventoryFields({ item }: itemProps) {

  return (
    <li>
      <p>{item.name}</p>
      <p>{item['belongs to']}</p>
      <p>{item["current location"]}</p>
      <p>{item.notes}</p>
    </li>
  )
}

export default InventoryFields;
