interface itemProps {
  item: {
    'name': String,
    'belongs to': String,
    'current Location': String,
    notes?: String
  }
}

function FieldComponent({ item }: itemProps) {

  return (
    <li>
      <p data-testid='name' role='name'>{item.name}</p>
      <p role='belongs-to'>{item['belongs to']}</p>
      <p role='current-Location'>{item["current Location"]}</p>
      <p role='notes'>{item.notes}</p>
    </li>
  )
}

export default FieldComponent;
