import TextField from '@mui/material/TextField';
type TextFieldProps = {
  onChange: React.ChangeEvent<HTMLInputElement>,
}

function QuickPanelChangeInput({ onChange }: TextFieldProps) {

  return <TextField
    sx={{ m: 1, minWidth: 200 }}
    id='outlined-basic'
    label='name' name="name"
    variant='outlined'
    onChange={onChange} />

}

export default QuickPanelChangeInput;
