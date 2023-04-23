import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDays({days, setDays}) {
  

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div className='select-days'>
     <p>Price Change In</p>
     
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleChange}
          sx={{
            height: '2.5rem',
            color:'var(--white)',
            "& .MuiOutlinedInput-notchedOutline":{
                borderColor:'white',
            },
            "& .MuiSvgIcon-root":{
                color:'white',
            },

            "&:hover":{
                "&& fieldset":{
                    borderColor:'var(--Orange)',
                }
            }

          }}
        >
          <MenuItem value={7}>1 Week</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
          <MenuItem value={1095}>3 Years</MenuItem>
          <MenuItem value={1825}>5 Years</MenuItem>
        </Select>
      
    </div>
  );
}