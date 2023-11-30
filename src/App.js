// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/navbar';
import { Shop } from './pages/shop/shop';
import Contact from './pages/contact';
import { Cart } from './pages/cart/cart';
import Checkout from './pages/cart/checkout';
import PurchaseConfirmation from './pages/cart/PurchaseConfirmation';
import { ShopContextProvider } from './context/shop-context';
import SignUpView from './pages/auth/SignUpView';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/Signup';
import SignOut from './pages/auth/SignOut';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/purchaseConfirmation" element={<PurchaseConfirmation />} />
            <Route path="/auth/SignUpView" element={<SignUpView />} />
            <Route path="/auth/SignIn" element={<SignIn />} />
            <Route path="/auth/Signup" element={<SignUp />} />
            <Route path="/auth/SignOut" element={<SignOut />} />
          </Routes>

          <Footer /> {}
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
