import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Tooltip from '@mui/material/Tooltip';
import "./styles.css";
function List({ coin }) {
  return (
    <tr className="list-row">
       
      <td>
        <img className="coin-logo font" alt={coin.name} src={coin.image}></img>
      </td>
      
      <Tooltip title='Coin Name'>
        <td>
        <p className="coin-symbol hidden">{coin.symbol}-USD</p>
        <p className="coin-name margin font">{coin.name}</p>
      </td>

      </Tooltip>
      {coin.price_change_percentage_24h > 0 ? (
        <>
         
          <td className="chip-flex font">
           <Tooltip title='Price Change in 24 Hrs'>
            <p className="price-chip padding font">
              +{coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            </Tooltip>
          </td>
          
          
          <td>
            <p className="icon-chip hidden ">
              <TrendingUpIcon />
            </p>
          </td>
        
        </>
        
      ) : (
        <>
          <td className="chip-flex">
          <Tooltip title='Price Change in 24 Hrs'>
            <p className="price-chip red padding font">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            </Tooltip>
          </td>
          
          <td>
            <p className="icon-chip red hidden">
              <TrendingDownIcon />
            </p>
          </td>
        </>
      )}
       
      <Tooltip title='Current Price'><td >
        <h3 className={coin.price_change_percentage_24h > 0 ? "up center  right font" : "down center  right font"}>
          ${coin.current_price.toLocaleString()}
        </h3>
      </td> 
      </Tooltip>
      
     <Tooltip title='Volume'>
      <td className="price-container ">
        <h3 className="volume hidden">{coin.total_volume.toLocaleString()}</h3>
      </td>
      </Tooltip>
      <Tooltip title='Market Cap'>
      <td>
        <h3 className="cap hidden">{coin.market_cap.toLocaleString()}</h3>
      </td>
      </Tooltip>
    </tr>
  );
}

export default List;
