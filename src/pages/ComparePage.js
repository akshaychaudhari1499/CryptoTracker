import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import LineChart from "../components/Coin/LineChart";
import { getCoinPrices } from "../functions/getCoinPrices";
import SelectDays from "../components/Coin/Select";
import { settingChartData } from "../functions/settingChartData";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import Loader from "../components/Common/Loader";
import TogglePriceType from "../components/Coin/PriceType";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/coinInfo";

function ComparePage() {

  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [coin1Data, setCoin1Data] = useState(null);
  const [coin2Data, setCoin2Data] = useState(null);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const[price1,setPrice1]=useState([]);
  const[price2,setPrice2]=useState([]);
console.log(coin1, coin2)
  useEffect(() => {    
    getData();
  }, []);

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const price2Data = await getCoinPrices(coin2, event.target.value, priceType);
    const price1Data = await getCoinPrices(coin1, event.target.value, priceType);
    setPrice1(price1Data);
    setPrice2(price2Data);
     settingChartData(setChartData, price1, event.target.value,chartData);
     console.log(price1,price2)
     setIsLoading(false);
  }
  async function getData() {
    
    const mydata1 = await getCoinData(coin1);
    console.log(mydata1)
    if (mydata1 ) {
      const mydata2 = await getCoinData(coin2);
      console.log(mydata2)
      await coinObject(setCoin1Data, mydata1,coin1Data);
      if (mydata2) {
        await coinObject(setCoin2Data, mydata2);
        if (coin1Data && coin2Data) {
          console.log(coin1Data, coin2Data);
          const price2Data = await getCoinPrices(coin2, days, priceType);
          const price1Data = await getCoinPrices(coin1, days, priceType);
          setPrice1(price1Data);
          setPrice2(price2Data);
          console.log(price1,price2);
          if (price1 && price2) {
            console.log("Both the coin1 and coin2 prices fetched successfully");
            console.log(price1, price2);
            settingChartData(setChartData, price1, days,chartData)            
            
          } else {
            console.log("failed to fetch coin");
          }
        }
      }
    }
  }
  async function handleCoinChange(event, isCoin2) {
    setIsLoading(true);
    if (isCoin2) {
      setCoin2(event.target.value);
      const mydata = await getCoinData(event.target.value);
      console.log(event.target.value);
      coinObject(setCoin2Data, mydata);
    } else {
      console.log(event.target.value);
      setCoin1(event.target.value);
      const mydata = await getCoinData(event.target.value);
      coinObject(setCoin1Data, mydata);
    }
    const price1Data = await getCoinPrices(coin1, days, priceType);
    const price2Data = await getCoinPrices(coin2, days, priceType);
    setPrice1(price1Data);
    setPrice2(price2Data);

    if (price1.length > 0 && price2.length > 0) {
      console.log("Both the coin1 and coin2 prices fetched successfully");
      console.log(price1, price2, coin1Data, coin2Data);      
      settingChartData(setChartData, price1, days,chartData);
      setIsLoading(false);
    } else {
      console.log("failed to fetch coin");
    }
  }

  return (
    <div>
      <Header />
      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        {coin1Data && <List coin={coin1Data} />}
      </div>
      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        {coin2Data && <List coin={coin2Data} />}
      </div>
      
     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <SelectCoins
        coin1={coin1}
        coin2={coin2}
        handleCoinChange={handleCoinChange}
      />
      <SelectDays
        days={days}
        handleDaysChange={handleDaysChange}
        noPtag={true}
      />
      </div>
      <TogglePriceType priceType={priceType} setPriceType={setPriceType} />
      {isLoading ?<Loader/>:<LineChart chartData={chartData} priceType={priceType} multiAxis={false}/>}
      <CoinInfo heading={coin1Data?.name} desc={coin1Data?.desc} />
      <CoinInfo heading={coin2Data?.name} desc={coin2Data?.desc} />
          
     
    </div>
  );
}

export default ComparePage;
