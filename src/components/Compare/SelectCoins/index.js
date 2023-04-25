import React, { useEffect, useState } from "react";
import "./styles.css";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import GetCoins from "../../../functions/getCoins";
import SelectDays from "../../Coin/Select";
function SelectCoins({coin1,coin2,handleCoinChange}) {  
  const [allCoins, setAllCoins] = useState([]);  
  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },

    "&:hover": {
      "&& fieldset": {
        borderColor: "var(--Orange)",
      },
    },
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  async function getAllCoins() {
    const myCoins = await GetCoins();
    if (myCoins){
        setAllCoins(myCoins);
        console.log(allCoins);
    }
  
  }

  
  return (
    <div>
        <div className="select-coin-flex">
            <p>Coin-1</p>
      <Select
        id="demo-simple-select"
        value={coin1}
        label="Coin-1"
        onChange={(event)=>handleCoinChange(event,false)}
        sx={style}
      >
        {allCoins.filter(item=>item.id!==coin2).map((coin) => (
          <MenuItem value={coin.id} className="title-select">
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <p>Coin-2</p>
      <Select
        id="demo-simple-select"
        value={coin2}
        label="Coin-2"
        onChange={(event)=>handleCoinChange(event,true)}
        sx={style}
      >
        {allCoins.filter(item=>item.id!==coin1).map((coin,index) => (
          <MenuItem key={index} value={coin.id} className="title-select">
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      
</div>

      <div>

      </div>
    </div>
  );
}

export default SelectCoins;
