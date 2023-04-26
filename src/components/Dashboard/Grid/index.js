import React, { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import "./styles.css";
import { Link } from "react-router-dom";

function Grid({ coin }) {
  const[added,setAdded]=useState(false)
 
  function addTowatchlist(coinData){
    const coinSymbol = coinData.symbol; // Or any other identifier you want to use
    setAdded(true)
    
  // Step 3: Retrieve the watchlist data from Local Storage
  let watchlistData = JSON.parse(localStorage.getItem('watchlist')) || {};

  // Step 4: Add the coin to the watchlist data if it's not already there
  if (!watchlistData[coinSymbol]) {
    watchlistData[coinSymbol] = coinSymbol;
    localStorage.setItem('watchlist', JSON.stringify(watchlistData));
    // Step 6: Update the UI
    // ...
  }
  else{
    localStorage.removeItem(watchlistData[coinSymbol]);
    setAdded(!added)
    console.log('item is removed');
  }

  }
  return (
    
    <div className= {coin.price_change_percentage_24h>0?'grid-container':'grid-container red-hover'}>
      <div className="info-flex">
        <img className="coin-logo" alt={coin.name} src={coin.image}></img>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}-USD</p>
          <p className="coin-name">{coin.name}</p>
        </div>
        <div className="watchlist" value={coin.id} onClick={()=>       
          addTowatchlist(coin)}
        >
         {added ?<StarRoundedIcon/>:<StarBorderRoundedIcon/>}
        </div>
      </div>
      <Link to={`/coin/${coin.id}`}> 
      {coin.price_change_percentage_24h > 0 ? (
          
        <div className="chip-flex">
          <p className="price-chip " >          
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="icon-chip">
            <TrendingUpIcon />
          </p>
        </div>
      ) : (
        <div className="chip-flex">
          <p className="price-chip red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="icon-chip red">
            <TrendingDownIcon />
          </p>
        </div>
        
      )}
      <div className="price-container">
<h3 className = {coin.price_change_percentage_24h>0 ? 'up' :'down'}> ${coin.current_price.toLocaleString()}</h3>
<p className="volume">Total volume : {coin.total_volume.toLocaleString()}</p>
<p className="cap">Market Cap : {coin.market_cap.toLocaleString()}</p>

      </div>
      </Link>
    </div>
    
  );
}

export default Grid;
