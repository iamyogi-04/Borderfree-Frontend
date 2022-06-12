import './App.css';
import Mainpage from './components/Mainpage/Mainpage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductDescription from './components/Description/ProductDescription';
import {useState} from 'react';
function App() {
  const [prod, setProd] = useState(null);
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Mainpage setProd={setProd}/>} ></Route>
      <Route path="/prod" element={<ProductDescription prod={prod}/>} ></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
