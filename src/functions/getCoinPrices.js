import axios from "axios";

export const getCoinPrices=(coinId,days,priceType) =>{
    const prices=axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`).then(response=>{
       console.log('get coin prices api fetched')
          return response.data[priceType];
          
        }).catch(err => {
          console('get coins prices api fetched failed')
          console.log(err)});
        
        return prices;
}