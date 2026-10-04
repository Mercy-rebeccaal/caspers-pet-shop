import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import CategorySection from './components/CategorySection';
import ProductSection from './components/ProductSection';
import BrandSection from './components/BrandSection';
import GroomingSection from './components/GroomingSection';
import GroomingModal from './components/GroomingModal';
import WhyUsSection from './components/WhyUsSection';
import ReviewsSection from './components/ReviewsSection';
import LocalBusinessSection from './components/LocalBusinessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import MobileStickyBar from './components/MobileStickyBar';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('caspers_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Dialog States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGroomingOpen, setIsGroomingOpen] = useState(false);
  const [groomingService, setGroomingService] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('home');

  // Quick feedback toast notification
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('caspers_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product, qty = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevItems, { ...product, quantity: qty }];
    });
    showToast(`Added ${product.name} to your basket!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    setCartItems((prev) =>
      prev.map((it) => (it.id === productId ? { ...it, quantity: newQty } : it))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((it) => it.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Grooming trigger
  const handleOpenGrooming = (serviceName = '') => {
    setGroomingService(serviceName || 'Full Grooming');
    setIsGroomingOpen(true);
  };

  // Category filter trigger
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveTab('shop');
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation tab handler
  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'dog') {
      setSelectedCategory('Dog Food');
      const el = document.getElementById('shop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'cat') {
      setSelectedCategory('Cat Food');
      const el = document.getElementById('shop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'accessories') {
      setSelectedCategory('Accessories');
      const el = document.getElementById('shop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'grooming') {
      const el = document.getElementById('grooming');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'about') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'shop') {
      setSelectedCategory('All');
      const el = document.getElementById('shop');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#29242D] relative font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          aria-label="Notification"
          className="fixed top-20 right-4 z-50 bg-[#29242D] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm animate-in fade-in slide-in-from-top-3 duration-200 border border-white/20"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-medium">{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-amber-300 hover:underline flex items-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            View
          </button>
        </aside>
      )}

      {/* Main Header / Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenGrooming={() => handleOpenGrooming()}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onShopClick={() => handleSelectTab('shop')}
          onGroomingClick={() => handleOpenGrooming()}
        />

        {/* Trust Strip */}
        <TrustStrip />

        {/* Shop By Category Section */}
        <CategorySection
          onSelectCategory={handleSelectCategory}
          onGroomingClick={() => handleOpenGrooming()}
        />

        {/* Featured Products / Shop Catalog */}
        <ProductSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* Brands You Trust Section */}
        <BrandSection onSelectBrand={(_brandName) => {
          setSelectedCategory('All');
          const el = document.getElementById('shop');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Premium Grooming Section */}
        <GroomingSection onOpenGrooming={handleOpenGrooming} />

        {/* Why Pet Parents Choose Casper's */}
        <WhyUsSection />

        {/* Genuine Google Reviews */}
        <ReviewsSection />

        {/* Local Business Section: Map, Address, Hours */}
        <LocalBusinessSection />

        {/* Contact Form Section */}
        <ContactSection onOpenGrooming={handleOpenGrooming} />
      </main>

      {/* Rich Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenGrooming={() => handleOpenGrooming()}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Grooming Booking Flow Modal */}
      <GroomingModal
        isOpen={isGroomingOpen}
        onClose={() => setIsGroomingOpen(false)}
        preselectedService={groomingService}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget onOpenGrooming={() => handleOpenGrooming()} />

      {/* Mobile Bottom Sticky Navigation Bar */}
      <MobileStickyBar
        onOpenGrooming={() => handleOpenGrooming()}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />
    </div>
  );
}
