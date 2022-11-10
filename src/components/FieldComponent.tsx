function FieldComponent({ item }) {

  return (
    <li>
      <p data-testid='name' role='name'>{item.name}</p>
      <p role='belongs-to'>{item["belongs-to"]}</p>
      <p role='Current-Location'>{item["Current-Location"]}</p>
      <p role='Notes'>{item.notes}</p>
    </li>
  )
}

export default FieldComponent;
