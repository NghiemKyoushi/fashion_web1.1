import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectProps ={
    title: string;
    handleChange: (event: SelectChangeEvent) => void;
}
export default function SelectComponent(props: SelectProps) {
    return(
        <FormControl fullWidth variant="standard"  >
        <InputLabel id="demo-simple-select-label">{props?.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props?.title}
          label="Type of product"
          onChange={props?.handleChange}
        >
          <MenuItem value={'new'}>New</MenuItem>
          <MenuItem value={'popular'}>Popular</MenuItem>
        </Select>
      </FormControl>
    )
}