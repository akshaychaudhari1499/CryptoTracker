import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import PaginationComponent from "../components/Common/Pagination";
function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  function onSearchChange(e) {
    console.log(e.target.value);
    setSearch(e.target.value);    
  }
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {setCoins(response.data) 
      setIsLoading(false)}
      )
      .catch((err) => console.error());
  }, []);

  console.log(coins);

  return (
    <><Header />
    {isLoading ?<Loader/>:<div>     
    <Search search={search} onSearchChange={onSearchChange} />
    <TabsComponent coins={filteredCoins} />
    <PaginationComponent/>
    <BackToTop></BackToTop>
  </div>}
    
    
    </>
   
  );
}

export default Dashboard;
