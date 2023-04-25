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
  let price1 = [];
  let price2 = [];
console.log(coin1, coin2)
  useEffect(() => {
    getData();
  }, []);

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const price2 = await getCoinPrices(coin2, event.target.value, priceType);
    const price1 = await getCoinPrices(coin1, event.target.value, priceType);
     settingChartData(setChartData, price1, event.target.value, price2);
     console.log(price1,price2)
  }
  async function getData() {
    setIsLoading(true);
    const mydata1 = await getCoinData(coin1);
    console.log(mydata1)
    if (mydata1 ) {
      const mydata2 = await getCoinData(coin2);
      console.log(mydata2)
      coinObject(setCoin1Data, mydata1);
      if (mydata2) {
        coinObject(setCoin2Data, mydata2);
        if (coin1Data && coin2Data) {
          console.log(coin1Data, coin2Data);
          const price2 = await getCoinPrices(coin2, days, priceType);
          const price1 = await getCoinPrices(coin1, days, priceType);
          console.log(price1,price2);
          if (price1 && price2) {
            console.log("Both the coin1 and coin2 prices fetched successfully");
            console.log(price1, price2);
            
            setIsLoading(false);
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
    price1 = await getCoinPrices(coin1, days, priceType);
    price2 = await getCoinPrices(coin2, days, priceType);

    if (price1.length > 0 && price2.length > 0) {
      console.log("Both the coin1 and coin2 prices fetched successfully");
      console.log(price1, price2, coin1Data, coin2Data);
      setIsLoading(false);
       settingChartData(setChartData, price1, days, price2);
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
      <TogglePriceType priceType={priceType} setPriceType={setPriceType} />
      <CoinInfo heading={coin1Data?.name} desc={coin1Data?.desc} />
      <CoinInfo heading={coin2Data?.name} desc={coin2Data?.desc} />
          {/* <LineChart
          chartData={chartData}
          priceType={priceType}
          multiAxis={true}
        />  */}
     
    </div>
  );
}

export default ComparePage;
