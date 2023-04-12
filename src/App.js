
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import MainComponent from './components/LandingPage/MainComponent';
import HomePage from './pages/Home';
import  Dashboard  from './pages/Dashboard';

function App() {
  return (
     <BrowserRouter>
    <Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
