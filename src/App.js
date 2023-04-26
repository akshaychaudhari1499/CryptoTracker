
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import  Dashboard  from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/Watchlist';

function App() {
  

  return (
     <BrowserRouter>
    <Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/coin/:coinId' element={<CoinPage/>}></Route>
<Route path='/compare' element={<ComparePage/>}></Route>
<Route path='/watchlist' element={<Watchlist/>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
