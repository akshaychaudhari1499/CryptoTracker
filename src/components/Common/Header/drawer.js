import { useState } from 'react';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <div className='drawer'>       
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className='link'/></IconButton>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
            
          >
            <div className='drawer-div'>
            <a href='/'><p className='link'>Home</p></a>
        <a href='/'><p className='link'>Compare</p></a>
        <a href='/'><p className='link'>Watchlist</p></a>
       </div>
          </Drawer>
      
      
    </div>
  );
}