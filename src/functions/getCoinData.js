import axios from "axios";

export const getCoinData=(coinId)=>{
   const coin= axios.get(
            `https://api.coingecko.com/api/v3/coins/${coinId}`
          )
          .then((response) => {
         
          return response.data;        
          
          }
          )
          .catch((err) => console.error());
          return coin;
}