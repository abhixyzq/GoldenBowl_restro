import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft, MessageSquare, PhoneCall, CheckCircle2, Utensils, Truck, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [orderType, setOrderType] = useState('delivery'); // delivery | pickup
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    let text = `*NEW ORDER - GOLDEN BOWL HAJIPUR*\n`;
    text += `*Order Type:* ${orderType === 'delivery' ? 'HOME DELIVERY 🚀' : 'DINE-IN / TAKEAWAY 🛍️'}\n`;
    if (customerName) text += `*Name:* ${customerName}\n`;
    if (customerPhone) text += `*Phone:* ${customerPhone}\n`;
    if (orderType === 'delivery' && address) text += `*Delivery Address:* ${address}\n`;
    text += `\n*ORDER ITEMS:*\n`;

    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    text += `\n*TOTAL AMOUNT:* ₹${totalPrice}\n`;
    if (notes) text += `*Special Cooking Notes:* ${notes}\n`;
    text += `\nPlease confirm my order. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917033313440?text=${encoded}`, '_blank');
    setOrderPlaced(true);
  };

  return (
    <div className="pb-24 md:pb-32 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto space-y-6 animate-fade-in pt-4 sm:pt-6">
      
      {/* Back button & Title */}
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-xs font-bold text-on-surface hover:text-primary transition-colors bg-surface-container px-3.5 py-1.5 rounded-full border border-outline-variant/30 focus:ring-2 focus:ring-primary"
          aria-label="Return to previous page"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </button>

        <h1 className="font-headline text-2xl sm:text-4xl font-extrabold text-on-surface flex items-center gap-2">
          <ShoppingBag className="w-7 h-7 text-primary" />
          <span>Your Basket</span>
        </h1>
      </div>

      {orderPlaced ? (
        <div className="bg-surface-container-low p-8 sm:p-12 rounded-3xl text-center space-y-4 plate-shadow border border-outline-variant/30 max-w-lg mx-auto">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-headline text-2xl font-bold text-emerald-900">Order Sent via WhatsApp!</h2>
          <p className="text-xs sm:text-sm text-on-surface font-medium leading-relaxed">
            We have forwarded your order summary to the Golden Bowl Hajipur desk. You can also call us directly at <strong>+91 70333 13440</strong>.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                clearCart();
                setOrderPlaced(false);
                navigate('/menu');
              }}
              className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full text-xs sm:text-sm shadow-md"
            >
              Back to Menu
            </button>
          </div>
        </div>
      ) : cart.length === 0 ? (
        <div className="bg-surface-container-low p-12 sm:p-16 rounded-3xl text-center space-y-4 plate-shadow border border-outline-variant/30 max-w-md mx-auto">
          <div className="w-16 h-16 bg-surface-container text-on-surface rounded-full flex items-center justify-center mx-auto opacity-70">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-headline text-xl font-bold text-on-surface">Your Basket is Empty</h2>
          <p className="text-xs text-on-surface font-medium leading-relaxed">
            Explore our authentic North Indian, Biryani, and Chinese menu dishes to add your favorite meals.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-6 py-3 rounded-full text-xs shadow-md hover:bg-opacity-90"
              aria-label="Explore menu dishes"
            >
              <Utensils className="w-4 h-4" /> Explore Menu Dishes
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Basket Items List (Left / Main) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Header info */}
            <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
              <span className="font-label text-xs font-bold text-on-surface">
                {cart.length} item(s) selected
              </span>
              <button
                onClick={clearCart}
                className="text-xs text-red-700 font-bold hover:underline flex items-center gap-1 focus:ring-2 focus:ring-red-500"
                aria-label="Clear all items from basket"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All
              </button>
            </div>

            {/* Items */}
            <div className="space-y-3">
              {cart.map((item) => (
                <div 
                  key={item.id}
                  className="bg-surface p-3.5 sm:p-4 rounded-2xl border border-outline-variant/30 plate-shadow flex items-center gap-3 sm:gap-4"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                      <h3 className="font-headline text-xs sm:text-base font-bold text-on-surface truncate">{item.name}</h3>
                    </div>
                    <p className="text-xs font-extrabold text-primary">₹{item.price}</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-surface-container-low px-2 sm:px-3 py-1 rounded-full border border-outline-variant/30">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 text-on-surface hover:text-primary transition-colors focus:ring-1 focus:ring-primary"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-xs sm:text-sm text-on-surface w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 text-on-surface hover:text-primary transition-colors focus:ring-1 focus:ring-primary"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors focus:ring-1 focus:ring-red-500"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

          </div>

          {/* Checkout & Delivery Details (Right Column) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Order Type Toggle */}
            <div className="bg-surface-container-low p-4 rounded-3xl border border-outline-variant/30 space-y-4 plate-shadow">
              <h2 className="font-label text-xs font-bold text-secondary uppercase tracking-wider block">Order Mode</h2>
              
              <div className="flex bg-surface p-1 rounded-2xl border border-outline-variant/30" role="group" aria-label="Order mode selector">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 py-2.5 rounded-xl font-label text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    orderType === 'delivery'
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface hover:text-on-surface'
                  }`}
                  aria-label="Select Home Delivery"
                >
                  <Truck className="w-4 h-4" /> Home Delivery
                </button>
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 py-2.5 rounded-xl font-label text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    orderType === 'pickup'
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface hover:text-on-surface'
                  }`}
                  aria-label="Select Takeaway or Dine-in"
                >
                  <Store className="w-4 h-4" /> Takeaway / Dine-in
                </button>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label htmlFor="customerName" className="block text-xs font-bold text-on-surface mb-1">Your Full Name</label>
                  <input
                    id="customerName"
                    type="text"
                    placeholder="Rahul Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="customerPhone" className="block text-xs font-bold text-on-surface mb-1">Phone Number</label>
                  <input
                    id="customerPhone"
                    type="tel"
                    placeholder="Mobile Number (e.g. 70333 13440)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label htmlFor="address" className="block text-xs font-bold text-on-surface mb-1">Delivery Address in Hajipur</label>
                    <textarea
                      id="address"
                      placeholder="House No., Street, Landmark, Hajipur..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="cookingNotes" className="block text-xs font-bold text-on-surface mb-1">Cooking Notes / Spice Instructions (Optional)</label>
                  <input
                    id="cookingNotes"
                    type="text"
                    placeholder="Extra spicy, less oil, high chair needed..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-outline-variant/30 pt-3 space-y-2 text-xs">
                <div className="flex justify-between text-on-surface font-medium">
                  <span>Subtotal</span>
                  <span className="font-bold text-on-surface">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-on-surface font-medium">
                  <span>Delivery Charges</span>
                  <span className="text-emerald-800 font-bold">Calculated on WhatsApp</span>
                </div>
                <div className="h-[1px] bg-outline-variant/30 my-1" />
                <div className="flex justify-between text-base font-headline font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary text-xl">₹{totalPrice}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-label text-xs font-bold rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all focus:ring-2 focus:ring-emerald-500"
                  aria-label="Checkout order via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" /> Order via WhatsApp
                </button>
                <a
                  href="tel:917033313440"
                  className="w-full py-3 bg-secondary text-white font-label text-xs font-bold rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all focus:ring-2 focus:ring-secondary"
                  aria-label="Call Golden Bowl Outlet Desk at +91 70333 13440"
                >
                  <PhoneCall className="w-4 h-4" /> Call Outlet Desk (70333 13440)
                </a>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};
