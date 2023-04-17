import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./styles.css";
function List({ coin }) {
  return (
    <tr className="list-row">
      <td>
        <img className="coin-logo" alt={coin.name} src={coin.image}></img>
      </td>
      <td >
        <p className="coin-symbol">{coin.symbol}-USD</p>
        <p className="coin-name">{coin.name}</p>
      </td>

      {coin.price_change_percentage_24h > 0 ? (
        <>
          <td className="chip-flex">
            <p className="price-chip">
              +{coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </td>
          <td>
            <p className="icon-chip">
              <TrendingUpIcon />
            </p>
          </td>
        </>
      ) : (
        <>
          <td className="chip-flex">
            <p className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </td>
          <td>
            <p className="icon-chip">
              <TrendingDownIcon />
            </p>
          </td>
        </>
      )}
      <td>
        <h3 className={coin.price_change_percentage_24h > 0 ? "up" : "down"}>
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
     
      <td className="price-container">
        <h3 className="volume">{coin.total_volume.toLocaleString()}</h3>
      </td>
      <td>
        <h3 className="cap">{coin.market_cap.toLocaleString()}</h3>
      </td>
    </tr>
  );
}

export default List;
