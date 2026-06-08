import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx'; // Pudhu About section
import Flavors from './components/Flavors.jsx';
import PromoVideo from './components/PromoVideo.jsx';
import OrderCTA from './components/OrderCTA.jsx';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (price, title) => {
    setCartCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
  };

  const handleBuyNow = () => {
    if (cartCount === 0) {
      alert("🛒 Your cart is empty! Please select a flavor first.");
      document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    alert(`🎉 Successfully Purchased!\n\n📦 Total Packets: ${cartCount}\n💵 Total Amount: ₹${totalPrice}\n\nThank you for purchasing from CRUNCHX! 🔥`);
    setCartCount(0);
    setTotalPrice(0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-600 selection:text-white antialiased overflow-x-hidden">
      <Navbar cartCount={cartCount} totalPrice={totalPrice} handleBuyNow={handleBuyNow} />
      
      <main>
        <Hero />
        <About /> {/* Cinematic 5 lines section here */}
        <Flavors addToCart={addToCart} handleBuyNow={handleBuyNow} />
        <PromoVideo />
        <OrderCTA handleBuyNow={handleBuyNow} cartCount={cartCount} totalPrice={totalPrice} />
      </main>
    </div>
  );
}