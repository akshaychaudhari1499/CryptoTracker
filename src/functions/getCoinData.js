import axios from "axios";

export const getCoinData=(coinId)=>{
   const coin= axios.get(
            `https://api.coingecko.com/api/v3/coins/${coinId}`
          )
          .then((response) => {
         console.log('coin data api fetched')
        
          return response.data;        
          
          }
          )
          .catch((err) => {console.log(err);
          console('get coins prices api fetched failed')});
          return coin;
}