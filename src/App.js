import React, { useEffect } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import Hero from './components/Hero'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import PurchaseForm from './components/PurchaseForm'
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import FlashSale from './components/FlashSale'
import CustomerReviews from './components/CustomerReviews'
import PricingCalculator from './components/PricingCalculator'
import WhatsAppWidget from './components/WhatsAppWidget'
const App = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div>
      <Nav/>
      <Hero/>
      <HowItWorks/>
      <Products/>
      <PricingCalculator/>
      <PurchaseForm/>
      <CustomerReviews/>
        <FlashSale/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
