import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/catalog/Catalog';
import Basket from './pages/basket/Basket';
import Product from './pages/product/Product';
import Uikit from './pages/uikit/UiKit';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/uikit' element={<Uikit/>}/>
      </Routes>
    </>
  )
}

export default App
