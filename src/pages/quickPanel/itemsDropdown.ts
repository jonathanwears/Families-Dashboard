import { MenuItem } from '@mui/material'
export function a() {
  return items.map((item) => {
    return (
      <MenuItem
        key= { item }
    value = { item }
      >
      { item }
      < /MenuItem>
    )
})
}