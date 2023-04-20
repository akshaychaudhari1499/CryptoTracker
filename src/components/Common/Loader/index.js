import React from 'react'
import './styles.css'
import  CircularProgress  from '@mui/material/CircularProgress'
function Loader() {
  return (
    <div className='loader'> <CircularProgress style={{color:'var(--Orange)'}} /></div>
  )
}

export default Loader