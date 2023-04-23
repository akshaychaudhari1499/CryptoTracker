
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import CoinInfo from '../components/Coin/coinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';


function CoinPage() {
const{coinId}=useParams()
const [isLoading,setIsLoading] = useState(true)
const [days,setDays]=useState(30);
const [coinData,setCoinData]=useState([]);   
const [chartData,setChartData]=useState({});         
        useEffect(() => {
        if(coinId){
        getData();}
      }, []);
      async function getData(){
        const data = await getCoinData(coinId)
       
        if (data){
          coinObject(setCoinData,data)
          console.log(coinData.desc);
          const prices=await getCoinPrices(coinId,days)
          if (prices){
            console.log(prices)
            setChartData({
              labels:prices.map(item=>convertDate(item[0])),
              datasets:[{
                data:prices.map(item=>item[1]),
                borderColor:'#FF6000',
                borderWidth:2   ,
                fill:true,
                tension:0.25,
                backgroundColor:'rgba(255, 96, 0,0.03)',
                pointRadius:2

              }]
            })
            setIsLoading(false)
          }
        }
      }
    
  return (
    <div>
        <Header/>
        {isLoading ? <Loader/> : <><div className='grey-wrapper'><List coin={coinData}/></div>
        <div className='grey-wrapper'><LineChart chartData={chartData}/></div>
        
         <CoinInfo heading={coinData.name} desc={coinData.desc}/></> }
       
   </div>
  )
}

export default CoinPage