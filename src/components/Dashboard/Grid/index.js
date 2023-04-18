import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./styles.css";

function Grid({ coin }) {
  return (
    <div className= {coin.price_change_percentage_24h>0?'grid-container':'grid-container red-hover'}>
      <div className="info-flex">
        <img className="coin-logo" alt={coin.name} src={coin.image}></img>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}-USD</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
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
    </div>
  );
}

export default Grid;
