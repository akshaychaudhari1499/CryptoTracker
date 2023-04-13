import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./styles.css";

function Grid({ coin }) {
  return (
    <div className= {coin.price_change_percentage_24h>0?'coin-container':'coin-container red-hover'}>
      <div className="logo-title-flex">
        <img className="coin-icon" alt={coin.name} src={coin.image}></img>
        <div className="coin-info-flex">
          <p className="coin-symbol">{coin.symbol}-USD</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="percent-container">
          <p className="percent-change ">          
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="change-icon">
            <TrendingUpIcon />
          </p>
        </div>
      ) : (
        <div className="percent-container">
          <p className="percent-change red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="change-icon red">
            <TrendingDownIcon />
          </p>
        </div>
        
      )}
      <div className="price-container">
<p className = {coin.price_change_percentage_24h>0 ? 'up' :'down'}> ${coin.current_price.toLocaleString()}</p>
<p className="volume">Total volume : {coin.total_volume.toLocaleString()}</p>
<p className="cap">Market Cap : {coin.market_cap.toLocaleString()}</p>

      </div>
    </div>
  );
}

export default Grid;
