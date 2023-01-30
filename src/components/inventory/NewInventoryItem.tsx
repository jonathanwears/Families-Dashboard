import TextField from '@mui/material/TextField';
type TextFieldProps = {
  onChange: React.ChangeEvent<HTMLInputElement>,
}

function NewInventoryItem({ onChange }: TextFieldProps) {

  return (
    <>
      <TextField sx={{ m: 1, minWidth: 200 }} id='outlined-basic' label='name' name="name" variant='outlined' onChange={onChange} />
      <TextField sx={{ m: 1, minWidth: 200 }} id='outlined-basic' label='belongs to' name='belongs to' variant='outlined' onChange={onChange} />
      <TextField sx={{ m: 1, minWidth: 200 }} id='outlined-basic' label='current Location' name='current Location' variant='outlined' onChange={onChange} />
      <TextField sx={{ m: 1, minWidth: 200 }} id='outlined-basic' label='notes' name='notes' variant='outlined' multiline rows='4' onChange={onChange} />
    </>
  )
}

export default NewInventoryItem;
