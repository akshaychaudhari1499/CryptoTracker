import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./styles.css";
function List({ coin }) {
  return (
    <tr className="coin-list">
      <td className="logo-title-flex">
        <img className="coin-icon" alt={coin.name} src={coin.image}></img>
      </td>
      <td className="coin-info-flex">
        <p className="coin-symbol">{coin.symbol}-USD</p>
        <p className="coin-name">{coin.name}</p>
      </td>

      {coin.price_change_percentage_24h > 0 ? (        
        <><td><p className="percent-change ">
        +{coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    </td>
    <td>
      <p className="change-icon">
        <TrendingUpIcon />
      </p>
    </td> </>
      ) : (
        <td className="percent-container">
          <p className="percent-change red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="change-icon red">
            <TrendingDownIcon />
          </p>
        </td>
      )}
      <td>
        <p className={coin.price_change_percentage_24h > 0 ? "up" : "down"}>
          {" "}
          ${coin.current_price.toLocaleString()}
        </p>
      </td>
      <td>
        <p className="volume">
          Total volume : {coin.total_volume.toLocaleString()}
        </p>
      </td>
      <td>
        <p className="cap">Market Cap : {coin.market_cap.toLocaleString()}</p>
      </td> 
    </tr>
  );
}

export default List;
