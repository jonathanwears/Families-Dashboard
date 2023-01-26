import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';

type QuickDropDownTypes = {
  value: string,
  handleOnChange: any,
  labelId: string,
  label: string,
  menuItems: string[],
}

function QuickDropDown({ value, handleOnChange, labelId, label, menuItems }: QuickDropDownTypes) {

  function renderItems(item: string) {
    return (
      <MenuItem
        key={item}
        value={item}
      >
        {item}
      </MenuItem>
    )
  }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          labelId={labelId}
          onChange={handleOnChange}
          value={value}
          aria-label={label}
          label={label}
        >
          {menuItems.map(renderItems)}
        </Select>
      </FormControl>
    </>
  )
}

export default QuickDropDown;
