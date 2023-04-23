import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePriceType({priceType,setPriceType}) {
 

  const handlePriceTypeChange = (event, newAlignment) => {
    setPriceType(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      
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
     
    </ToggleButtonGroup>
  );
}