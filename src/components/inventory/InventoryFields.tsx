interface itemProps {
  item: {
    'name': String,
    'belongs to': String,
    'current Location': String,
    notes?: String
  }
}

function InventoryFields({ item }: itemProps) {

  return (
    <li>
      <p data-testid='name'>{item.name}</p>
      <p>{item['belongs to']}</p>
      <p>{item["current Location"]}</p>
      <p>{item.notes}</p>
    </li>
  )
}

export default InventoryFields;
