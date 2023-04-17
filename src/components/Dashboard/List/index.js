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
      <td >
        <p className="coin-symbol hidden">{coin.symbol}-USD</p>
        <p className="coin-name font">{coin.name}</p>
      </td>

      {coin.price_change_percentage_24h > 0 ? (
        <>
        <Tooltip title='current_price'>
          <td className="chip-flex font">
            <p className="price-chip font">
              +{coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </td>
          </Tooltip>
          
          <td>
            <p className="icon-chip hidden ">
              <TrendingUpIcon />
            </p>
          </td>
        </>
      ) : (
        <><Tooltip title='current_price'>
          <td className="chip-flex">
            <p className="price-chip red font">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </td>
          </Tooltip>
          <td>
            <p className="icon-chip red hidden">
              <TrendingDownIcon />
            </p>
          </td>
        </>
      )}
      <Tooltip title='current_price'><td >
        <h3 className={coin.price_change_percentage_24h > 0 ? "up center right font" : "down center right font"}>
          ${coin.current_price.toLocaleString()}
        </h3>
      </td> 
      </Tooltip>
      
     <Tooltip title='volume'>
      <td className="price-container ">
        <h3 className="volume hidden">{coin.total_volume.toLocaleString()}</h3>
      </td>
      </Tooltip>
      <td>
        <h3 className="cap hidden">{coin.market_cap.toLocaleString()}</h3>
      </td>
    </tr>
  );
}

export default List;
