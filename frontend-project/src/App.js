import './styles/App.css';
import './styles/KayitOl.css'
import './styles/GirisYap.css'
import './styles/SifremiUnuttum.css';
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import AnaSayfa from './pages/AnaSayfa';
import KayitOl from './pages/KayitOl';
import GirisYap from './pages/GirisYap';
import SifreUnuttum from './pages/SifreUnuttum';
import SifreSifirlama from './pages/SifreSifirlama';




function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<AnaSayfa/>}/>
    <Route path='/KayitOl' element={<KayitOl/>}/>
    <Route path='/GirisYap' element={<GirisYap/>}/>
    <Route path='/SifremiUnuttum' element={<SifreUnuttum/>}/>
    <Route path='/SifreSifirlama' element={<SifreSifirlama/>}/>
    
   </Routes>
  </BrowserRouter>
  );
}

export default App;
