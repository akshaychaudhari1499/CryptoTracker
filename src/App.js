
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import  Dashboard  from './pages/Dashboard';
import CoinPage from './pages/Coin';

function App() {
  return (
     <BrowserRouter>
    <Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
<Route path='/coin/:coinId' element={<CoinPage/>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
