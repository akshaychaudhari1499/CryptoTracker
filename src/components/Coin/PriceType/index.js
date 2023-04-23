import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css'
export default function TogglePriceType({priceType,setPriceType}) {
 

  const handlePriceTypeChange = (event, newAlignment) => {
    setPriceType(newAlignment);
  };

  return (
    <div className="toggle">
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
       
        "&.Mui-selected":{
            color:'var(--Orange) !important',
        },
        borderColor:'var(--Orange) !important',
        border:'unset !important',
        "& .MuiToggleButtonGroup-grouped":{

            border:'1px solid',
            borderColor:'var(--Orange) !important',
            color:'var(--Orange)',
        },
        "& .MuiToggleButton-standard":{
            color:'var(--Orange) ',
        }
        
       

      }}
    >
      <ToggleButton value="prices" >
      PRICE
      </ToggleButton>
      <ToggleButton value="market_caps" >
      MKT CAP
      </ToggleButton>
      <ToggleButton value="total_volumes" >
      VOLUME
      </ToggleButton>
     
    </ToggleButtonGroup></div>
  );
}