import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';

function CoinPage() {
const{coinId}=useParams()
const [isLoading,setIsLoading] = useState(true)
const [coinData,setCoinData]=useState([]);            
        useEffect(() => {
        if(coinId){
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${coinId}`
          )
          .then((response) => {
          console.log(response.data);
          coinObject(coinData,setCoinData,response.data)
          console.log(coinData);
          setIsLoading(false)}
          )
          .catch((err) => console.error());}
      }, []);
    
  return (
    <div>
        <Header/>
        {isLoading ? <Loader/> : <List coin={coinData}/> }
   </div>
  )
}

export default CoinPage