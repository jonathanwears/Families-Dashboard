import { MenuItem } from '@mui/material';

function DropDownTypeOptions({ menuItems }) {

  const items = menuItems.map((item: string) => {

    return (
      <MenuItem
        key={item}
        value={item}
        renderValue={item}
      >
        {item}
      </MenuItem>
    )
  })

  return items;
}

export default DropDownTypeOptions;
