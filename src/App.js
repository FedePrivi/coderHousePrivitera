import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import {Checkout} from './components/Checkout/Checkout'

function App() {


 

  return (

    <>
      

      <BrowserRouter>
      <CartProvider>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1 className="ms-3 mt-3"> 404 Not Found </h1>}/>
      </Routes>

      </CartProvider>
      </BrowserRouter>
      </>


      );
  }
  
  export default App;
      
      

