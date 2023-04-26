import React, { useEffect, useState } from 'react'
import './styles.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import { Link } from 'react-router-dom'

function Header() {
  const [mode, setMode] = useState(localStorage.getItem('mode')?localStorage.getItem('mode'):'light-theme');
  
 useEffect(()=>{
 document.body.className=mode
 localStorage.setItem('mode',mode)
  },[mode])
  const toggleMode = () => {
    setMode(mode === "light-theme" ? "dark-theme" : "light-theme");
  };

  
  return (
    <div className='navbar'>
     <Link to='/'><h1 className='logo'>CryptoTracker <span style={{color:'var(--Orange)'}}>.</span></h1></Link>
    <div className='links'>
        <button className='toggle-btn-style' onClick={toggleMode}>{mode === "light-theme" ? <ToggleOffRoundedIcon/> : <ToggleOnRoundedIcon/> }</button>
        <Link to='/'><p className='link'>Home</p></Link>
        <Link to='/compare'><p className='link'>Compare</p></Link>
        <Link to='/watchlist'><p className='link'>Watchlist</p></Link>
       <Link to='/dashboard'><Button text='Dashboard'/></Link>
    </div>
    <div className='mobile-drawer'>
      <TemporaryDrawer mode={mode} toggleMode={toggleMode}/>
    </div>
    
    </div>
  )
}

export default Header