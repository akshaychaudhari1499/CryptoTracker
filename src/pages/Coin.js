import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coinObject } from "../functions/convertObject";
import List from "../components/Dashboard/List";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import CoinInfo from "../components/Coin/coinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/Select";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";

function CoinPage() {
  const { coinId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");
  useEffect(() => {
    if (coinId) {
      getData();
    }
  }, [coinId, days, priceType]);
  async function getData() {
    const data = await getCoinData(coinId);

    if (data) {
      coinObject(setCoinData, data);

      const prices = await getCoinPrices(coinId, days, priceType, setPriceType);
      if (prices) {
        setIsLoading(false);
        settingChartData(setChartData, prices, days);
      }
    }
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} setDays={setDays} />
            <TogglePriceType
              priceType={priceType}
              setPriceType={setPriceType}
            />
            <LineChart chartData={chartData} />
          </div>

          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
