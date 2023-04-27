import axios from 'axios';
import React from 'react'

function GetCoins() {
    const myCoins=axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((response) => {
      console.log('get coins 100 api fetched')
      // localStorage.setItem('watchlist', JSON.stringify(watchlistData));
      // localStorage.setItem('my100coins',JSON.stringify(JSON.parse(response.data)))      
      return response.data}
    )
    .catch((err) => {
      console.log('get coins 100 api fetched failed')
      console.log(err)});

    return myCoins
}

export default GetCoins