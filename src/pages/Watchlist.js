import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import GetCoins from '../functions/getCoins'
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button'
import WatchlistData from '../components/Watchlist';
import { motion } from "framer-motion";

function Watchlist() {
const[coinsAdded,setCoinsAdded]=useState([])

let watchlistData = JSON.parse(localStorage.getItem('watchlist')) || null;

console.log(watchlistData)

useEffect(()=>{
getAllCoin()
},[])
 async function getAllCoin(){
 const my100Coins=await GetCoins()
 if(my100Coins){
    const myCoins=my100Coins.filter(coin=>coin.symbol===watchlistData[coin.symbol])
    setCoinsAdded(myCoins)
 }
 
 }
 function clearStorage(){
  localStorage.clear();
  console.log("Clear storage")
  getAllCoin()

 }
  return (
    <div>
        <Header/>
        {!watchlistData ?<div className='No-Coins'> <motion.h1
         
          initial={{ opacity: 0.1, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
         No Coins Added to watchlist
        </motion.h1>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
           <Link to='/dashboard'><Button text='Dashboard'/></Link>           
        </motion.div>
   </div>:
   <div className='No-Coins'>
   <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}        >
           <Link to='/dashboard'><Button text='Dashboard'/></Link>
          <div onClick={clearStorage}><Button text="Clear Watchlist"  outlined={true}  /></div> 
        </motion.div>
        <WatchlistData myCoins={coinsAdded}/>
   </div>
  
        
    }
             
        </div>
  )
}

export default Watchlist