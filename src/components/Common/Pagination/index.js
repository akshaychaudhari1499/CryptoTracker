import  React from 'react';
import './styles.css';
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent({page,handleChange}) {
  

  return (
    <div className='pagination' >
      
      <Pagination count={10} page={page} onChange={(event,value)=>handleChange(event,value)} sx={{
color:'var(--white)',
'& .Mui-selected':{
    backgroundColor:'var(--Orange) !important',
    color:'var(--White) !important',
    borderColor:'var(--Orange) !important',
},
'& .MuiPaginationItem-ellipsis':{
    border:'0px solid var(--grey) !important'
},
'& .MuiPaginationItem-text':{
    color:'var(--White) !important',
    border:'1px solid var(--grey) !important'
},


      }} />
    </div>
  );
}