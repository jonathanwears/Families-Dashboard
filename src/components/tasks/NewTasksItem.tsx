import TextField from '@mui/material/TextField';
type TextFieldProps = {
  onChange: React.ChangeEvent<HTMLInputElement>,
}

function NewTasksItem({ onChange }: TextFieldProps) {
  return (
    <div>
      <TextField id='outlined-basic' label='Name' name='name' variant='outlined' onChange={onChange} />
      <TextField id='outlined-basic' label='Date' name='date' variant='outlined' onChange={onChange} />
      <TextField id='outlined-basic' label='Location' name='location' variant='outlined' onChange={onChange} />
      <TextField id='outlined-basic' label='Details' name='details' variant='outlined' onChange={onChange} />
    </div>
  );
}

export default NewTasksItem;
