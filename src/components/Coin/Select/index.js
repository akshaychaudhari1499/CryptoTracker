import React from 'react';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import './style.css'
export default function SelectDays({days, setDays,noPtag}) {
  
    const handleChange = (event) => {
        setDays(event.target.value);
           
      };
 
  return (
    <div className='select-days'>
    {!noPtag &&<p className='title-select'>Price Change In</p> } 
     
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          className='title-select'
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
          <MenuItem value={7} className='title-select'>1 Week</MenuItem>
          <MenuItem value={30}className='title-select'>30 Days</MenuItem>
          <MenuItem value={60}className='title-select'>60 Days</MenuItem>
          <MenuItem value={120}className='title-select'>120 Days</MenuItem>
          <MenuItem value={365}className='title-select'>1 Year</MenuItem>
          <MenuItem value={1095}className='title-select'>3 Years</MenuItem>
          <MenuItem value={1825}className='title-select'>5 Years</MenuItem>
        </Select>
      
    </div>
  );
}