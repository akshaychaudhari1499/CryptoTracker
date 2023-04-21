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
  const [paginatedCoins, setPaginatedCoins] =useState([]);
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
var initialIndex= (value-1)*10;
setPaginatedCoins(coins.slice(initialIndex,initialIndex+10))
  };
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
        setPaginatedCoins(response.data.slice(0,10))
      setIsLoading(false)}
      )
      .catch((err) => console.error());
  }, []);

  console.log(coins);

  return (
    <>
    
    <Header />
    {isLoading ?<Loader/>:<div>     
    <Search search={search} onSearchChange={onSearchChange} />    
    <TabsComponent coins={search?filteredCoins:paginatedCoins} />
    {!search && <PaginationComponent page={page} handleChange={handlePageChange}/>}
    <BackToTop></BackToTop>
  </div>}
    
    
    </>
   
  );
}

export default Dashboard;
