import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 500 || subtotal === 0 ? 0 : 40;
  const total = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    let orderList = items
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.name}* (${it.size}) - Qty: ${it.quantity} × ₹${it.price} = ₹${it.price * it.quantity}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `🛍️ *Order Request - Casper's Pet Shop*\n` +
      `--------------------------------\n` +
      `${orderList}\n` +
      `--------------------------------\n` +
      `*Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n` +
      `*Local Delivery:* ${deliveryFee === 0 ? 'FREE (Madambakkam & Tambaram)' : '₹40'}\n` +
      `*Total Payable:* ₹${total.toLocaleString('en-IN')}\n` +
      (customerName ? `\n*Name:* ${customerName}\n*Phone:* ${customerPhone}\n*Address:* ${deliveryAddress}\n` : '') +
      `\nPlease confirm stock availability and delivery schedule.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleDirectOrder = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !deliveryAddress) {
      alert('Please fill in all delivery details.');
      return;
    }
    setOrderPlaced(true);
  };

  const resetAll = () => {
    setOrderPlaced(false);
    setCheckoutMode(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Slide-over Drawer */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="relative w-full max-w-md bg-[#FFFDF9] shadow-2xl h-full flex flex-col z-10 animate-in slide-in-from-right duration-300 border-l border-[#E9E1EC]"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#E9E1EC] bg-[#FAF7F0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#54158A]" />
            <h2 id="cart-drawer-title" className="text-lg font-bold text-[#29242D] font-['Nunito']">
              Your Pet Basket ({items.reduce((sum, it) => sum + it.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F3ECF8] text-[#706A73] hover:text-[#54158A] transition"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free delivery notice bar */}
        <div className="bg-[#F3ECF8] text-[#54158A] text-xs py-2 px-4 flex items-center justify-between border-b border-[#E9E1EC]">
          <span className="flex items-center gap-1.5 font-medium">
            <Truck className="w-4 h-4" />
            {subtotal >= 500
              ? '🎉 You unlocked Free Local Delivery!'
              : `Add ₹${500 - subtotal} more for Free Local Delivery`}
          </span>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-left">
          {orderPlaced ? (
            /* Order Placed Confirmation */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#29242D] font-['Nunito']">
                Order Request Submitted!
              </h3>
              <p className="text-xs text-[#706A73] max-w-xs mx-auto">
                Thank you, <strong>{customerName}</strong>. Our Casper's store team has received your order and will call {customerPhone} to arrange delivery.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#1B8755] hover:bg-[#156e45] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send order copy to store WhatsApp
                </button>
              </div>
              <button
                onClick={resetAll}
                className="text-xs font-bold text-[#54158A] hover:underline block mx-auto mt-2"
              >
                Back to Shopping
              </button>
            </div>
          ) : checkoutMode ? (
            /* Delivery Address Form */
            <form onSubmit={handleDirectOrder} className="space-y-3.5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-[#29242D] uppercase tracking-wider">
                  Madambakkam / Tambaram Delivery
                </h3>
                <button
                  type="button"
                  onClick={() => setCheckoutMode(false)}
                  className="text-xs font-bold text-[#54158A] hover:underline"
                >
                  Edit Cart
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#706A73] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sundar"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#706A73] mb-1">
                  Phone Number for Delivery Coordination *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98400 54321"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#706A73] mb-1">
                  Delivery Address & Landmark *
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Flat/House No., Street, Landmark near Madambakkam, Tambaram, Selaiyur, Camp Road..."
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full bg-[#FAF7F0] border border-[#E9E1EC] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#54158A]"
                />
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900 leading-snug">
                <strong>Pay On Delivery:</strong> Cash or UPI (GPay/PhonePe/Paytm) accepted upon delivery by our store delivery executive.
              </div>

              <button
                type="submit"
                className="w-full bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold py-3 rounded-xl text-sm transition mt-2"
              >
                Confirm Delivery Request (₹{total.toLocaleString('en-IN')})
              </button>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#FAF7F0] hover:bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                Or Order directly via WhatsApp
              </button>
            </form>
          ) : items.length === 0 ? (
            /* Empty Cart View */
            <div className="py-12 text-center">
              <span className="text-4xl mb-3 block" aria-hidden="true">🛒</span>
              <h3 className="text-base font-bold text-[#29242D] mb-1 font-['Nunito']">
                Your pet basket is empty
              </h3>
              <p className="text-xs text-[#706A73] mb-6">
                Explore our wholesome dog and cat foods, treats, and accessories.
              </p>
              <button
                onClick={onClose}
                className="bg-[#54158A] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm hover:bg-[#3B0D63] transition"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            /* Items List */
            items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 sm:p-3.5 rounded-xl border border-[#E9E1EC] flex gap-3 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain bg-[#FAF7F0] rounded-lg p-1 border border-[#E9E1EC]/60 flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#54158A] uppercase tracking-wider block">
                    {item.brand}
                  </span>
                  <h4 className="text-xs font-bold text-[#29242D] truncate font-['Nunito']">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#706A73]">
                    {item.size} • ₹{item.price.toLocaleString('en-IN')}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#E9E1EC] rounded-lg overflow-hidden bg-[#FAF7F0]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-xs font-bold text-[#706A73] hover:bg-[#E9E1EC] transition"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-[#29242D] min-w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#706A73] hover:bg-[#E9E1EC] transition"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-1 text-xs"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-sm font-bold text-[#29242D]">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Summary */}
        {items.length > 0 && !orderPlaced && !checkoutMode && (
          <div className="p-4 sm:p-5 border-t border-[#E9E1EC] bg-[#FAF7F0] space-y-3">
            <div className="space-y-1.5 text-xs text-[#706A73]">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-[#29242D]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Local Delivery (Madambakkam & Tambaram):</span>
                <span className="font-semibold text-[#29242D]">
                  {deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : '₹40'}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#29242D] pt-2 border-t border-[#E9E1EC]">
                <span>Total Amount:</span>
                <span className="text-[#54158A]">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => setCheckoutMode(true)}
                className="w-full bg-[#54158A] hover:bg-[#3B0D63] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition"
              >
                <span>Proceed to Home Delivery</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#FAF7F0] hover:bg-[#F3ECF8] border border-[#E9E1EC] text-[#54158A] font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Instant Order via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
