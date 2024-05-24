// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} handleShow={handleShow} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/category/:categoryName" element={<Products addToCart={addToCart} />} />
        <Route path="/product/:productId" element={<SingleProduct addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} show={show} handleClose={handleClose} removeFromCart={removeFromCart} />} />
      </Routes>
      <Cart cartItems={cartItems} show={show} handleClose={handleClose} removeFromCart={removeFromCart} />
    </Router>
  );
}

export default App;
