import axios from "axios";

export const getCoinPrices=(coinId,days) =>{
    const prices=axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`).then(response=>{
       
          return response.data.prices;
          
        }).catch(err => {console.log(err)});

        return prices;
}