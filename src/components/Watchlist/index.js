import React, { useState } from 'react'
import Grid from '../Dashboard/Grid';

function WatchlistData({myCoins}) {
  const[added,setAdded]=useState(false);
  return (
    <div>
        <div className='grid-flex'>  {myCoins?.map((coin,i)=>{
               return <Grid coin={coin} key={i} added={added} setAdded={setAdded}/>;
                  })}</div>
               
    </div>
  )
}

export default WatchlistData