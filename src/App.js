import React from 'react';
import { Routes, Route,HashRouter } from 'react-router-dom';
// Import Layout and all page components
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FishProcess from './pages/FishProcess';
import FishTrade from './pages/FishTrade';
import CashewProcessing from './pages/CashewProcessing';
import CashewTrade from './pages/CashewTrade';
import CommodityTrade from './pages/CommodityTrade';
import FrozenTrade from './pages/FrozenTrade';
import SocialCommitment from './pages/SocialCommitment'; 
import AgriTrade from './pages/AgriTrade'; 

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="social-commitment" element={<SocialCommitment />} /> {/* 2. Add the new route */}
        
        {/* DML Group Pages */}
        <Route path="fish-process" element={<FishProcess />} />
        <Route path="fish-trade" element={<FishTrade />} />
        <Route path="cashew-processing" element={<CashewProcessing />} />
        <Route path="cashew-trade" element={<CashewTrade />} />
        <Route path="commodity-trade" element={<CommodityTrade />} />
        <Route path="frozen-trade" element={<FrozenTrade />} />
        <Route path="agri-trade" element={<AgriTrade />} />

      </Route>
    </Routes>
  );
}

export default App;