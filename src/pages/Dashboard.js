import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';
function Dashboard() {
const [coins,setCoins]=useState([]);
const [search,setSearch]=useState('')
function onSearchChange(e){
  console.log(e.target.value);
  setSearch(e.target.value)
}
const filteredCoins=coins.filter((coin)=>coin.name.toLowerCase().includes(search))
useEffect(()=>{
 axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then(response=>setCoins(response.data)).catch(err=>console.error());
},[])

console.log(coins)


  return (
    <div><Header/> 
    <Search search={search} onSearchChange={onSearchChange}/>
    <TabsComponent coins={filteredCoins}/></div>
   
  )
}

export default Dashboard