import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [orderType, setOrderType] = useState('delivery'); // delivery | pickup
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let text = `*NEW ORDER - GOLDEN BOWL HAJIPUR*\n`;
    text += `*Type:* ${orderType.toUpperCase()}\n`;
    if (customerName) text += `*Name:* ${customerName}\n`;
    if (customerPhone) text += `*Phone:* ${customerPhone}\n`;
    if (orderType === 'delivery' && address) text += `*Address:* ${address}\n`;
    text += `\n*ITEMS:*\n`;

    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    text += `\n*TOTAL AMOUNT:* ₹${totalPrice}\n`;
    if (notes) text += `*Notes:* ${notes}\n`;
    text += `\nPlease confirm my order. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917033313440?text=${encoded}`, '_blank');
    setOrderPlaced(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-outline-variant/30 flex flex-col shadow-2xl animate-fade-in">
          
          {/* Header */}
          <div className="p-margin-mobile md:p-margin-desktop border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface">Your Order Basket</h2>
                <p className="text-xs text-on-surface-variant">{cart.length} item(s) selected</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-margin-mobile space-y-4">
            {orderPlaced ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-headline text-xl font-bold text-primary">Order Sent to WhatsApp!</h3>
                <p className="text-sm text-on-surface-variant max-w-xs mx-auto">
                  We have initiated your order message with Golden Bowl staff. You can also call us directly at <strong>+91 70333 13440</strong>.
                </p>
                <button
                  onClick={() => {
                    clearCart();
                    setOrderPlaced(false);
                    setIsCartOpen(false);
                  }}
                  className="bg-primary text-on-primary font-bold px-6 py-2.5 rounded-full text-sm"
                >
                  Done
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto text-on-surface-variant opacity-60">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-lg font-semibold text-on-surface">Your basket is empty</h3>
                <p className="text-xs text-on-surface-variant max-w-xs mx-auto">
                  Explore our authentic North Indian, Biryani, and Chinese menu dishes to add your favorite meals.
                </p>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div className="flex bg-surface-container p-1 rounded-xl">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`flex-1 py-2 rounded-lg font-label text-xs font-bold transition-all ${
                      orderType === 'delivery'
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    🚀 Home Delivery
                  </button>
                  <button
                    onClick={() => setOrderType('pickup')}
                    className={`flex-1 py-2 rounded-lg font-label text-xs font-bold transition-all ${
                      orderType === 'pickup'
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    🛍️ Dine-in / Takeaway
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-surface-container-low p-3 rounded-2xl flex items-center gap-3 border border-outline-variant/20 plate-shadow"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                          <h4 className="font-headline text-sm font-bold text-on-surface truncate">{item.name}</h4>
                        </div>
                        <p className="text-xs font-bold text-primary mt-0.5">₹{item.price}</p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-surface px-2 py-1 rounded-full border border-outline-variant/30">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-on-surface-variant hover:text-primary transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-xs text-on-surface w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-on-surface-variant hover:text-primary transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="bg-surface-container-high p-4 rounded-2xl space-y-3 border border-outline-variant/20">
                  <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-secondary">Customer Details</h4>
                  
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number (e.g. 70333 13440)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  {orderType === 'delivery' && (
                    <textarea
                      placeholder="Delivery Address in Hajipur"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  )}

                  <input
                    type="text"
                    placeholder="Cooking notes / Spice level (Optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && !orderPlaced && (
            <div className="p-margin-mobile border-t border-outline-variant/20 bg-surface-container-low space-y-3">
              <div className="flex justify-between items-center text-sm font-body">
                <span className="text-on-surface-variant font-medium">Subtotal</span>
                <span className="font-bold text-on-surface">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-sm font-body">
                <span className="text-on-surface-variant font-medium">Estimated Taxes & Delivery</span>
                <span className="text-xs text-emerald-700 font-semibold">Calculated on order</span>
              </div>
              <div className="h-[1px] bg-outline-variant/30" />
              <div className="flex justify-between items-center text-base font-headline font-bold">
                <span className="text-on-surface">Total Amount</span>
                <span className="text-primary text-xl">₹{totalPrice}</span>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-label text-xs font-bold rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Order via WhatsApp
                </button>
                <a
                  href="tel:917033313440"
                  className="px-4 py-3.5 bg-secondary text-white font-label text-xs font-bold rounded-full flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <PhoneCall className="w-4 h-4" /> Call
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
