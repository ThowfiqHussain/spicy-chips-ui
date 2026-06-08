import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Flavors from './components/Flavors.jsx';
import SurvivalLogs from './components/SurvivalLogs.jsx';
import PromoVideo from './components/PromoVideo.jsx';
import FAQWarning from './components/FAQWarning.jsx';
import OrderCTA from './components/OrderCTA.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';

// Chip asset imports for cart rendering
import redChip from './assets/red-chip.png';
import blackChip from './assets/black-chip.png';
import greenChip from './assets/green-chip.png';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getImageByTitle = (title) => {
    if (title.toLowerCase().includes("red")) return redChip;
    if (title.toLowerCase().includes("black")) return blackChip;
    if (title.toLowerCase().includes("green")) return greenChip;
    return redChip;
  };

  const addToCart = (price, title) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.title === title);
      if (existing) {
        return prevItems.map((item) =>
          item.title === title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { title, price, quantity: 1, image: getImageByTitle(title) }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (title, change) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.title === title) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeItem = (title) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleBuyNow = () => {
    setIsCartOpen(true);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-600 selection:text-white antialiased overflow-x-hidden">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Flavors addToCart={addToCart} handleBuyNow={handleBuyNow} />
        <SurvivalLogs />
        <PromoVideo />
        <FAQWarning />
        <OrderCTA handleBuyNow={handleBuyNow} cartCount={cartCount} totalPrice={totalPrice} />
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />

      <Footer />
    </div>
  );
}