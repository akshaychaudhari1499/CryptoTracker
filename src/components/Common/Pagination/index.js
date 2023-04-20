import  React,{useState} from 'react';
import './styles.css';
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className='pagination' >
      
      <Pagination count={10} page={page} onChange={handleChange} sx={{
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