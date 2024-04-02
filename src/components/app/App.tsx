import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from '../productsList/ProductsList';
import Header from '../header/Header';
import Cart from '../cart/Cart';


import './App.css'


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductList/>} />
                <Route path="cart" element={<Cart/>} />
            </Routes>
    </BrowserRouter>
        
    )
}

export default App;
