import React, { useEffect, useState } from "react";
import "./styles.css";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import GetCoins from "../../../functions/getCoins";
import SelectDays from "../../Coin/Select";
function SelectCoins() {
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [allCoins, setAllCoins] = useState([]);
  const [days, setDays] = useState(30);
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
    }
    
  }

  function handleCoinChange(event,isCoin2) {
    isCoin2?setCoin2(event.target.value): setCoin1(event.target.value);
    
 
  }
  
  return (
    <div>
        <div className="select-coin-flex">
            <p>Coin-1</p>
      <Select
        id="demo-simple-select"
        value={coin1}
        label="Coin-1"
        onChange={(event)=>handleCoinChange(event)}
        sx={style}
      >
        {allCoins.map((coin) => (
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
        {allCoins.map((coin) => (
          <MenuItem value={coin.id} className="title-select">
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <SelectDays days={days} setDays={setDays} noPtag={true}/>
</div>

      <div>

      </div>
    </div>
  );
}

export default SelectCoins;
