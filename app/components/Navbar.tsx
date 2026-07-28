'use client';

import { Menu, Minus, Plus, Search, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from './CartProvider';

const Navbar = () => {
  const {items, itemCount, total, isOpen, setIsOpen, addItem, decreaseItem, removeItem} = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#eadfd6] bg-[#fffaf3]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2 font-bold">
            <span className="animate-wiggle grid h-10 w-10 place-items-center rounded-full bg-[#ef6b75] text-xl text-white">S</span>
            <span className="font-serif text-2xl">Scoopease</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="transition hover:text-[#ef6b75]" href="/">Home</a>
            <a className="transition hover:text-[#ef6b75]" href="/flavours">Flavours</a>
            <a className="transition hover:text-[#ef6b75]" href="/our-story">Our story</a>
            <a className="transition hover:text-[#ef6b75]" href="/reviews">Reviews</a>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Search" className="hidden h-10 w-10 place-items-center rounded-full hover:bg-white sm:grid"><Search size={19}/></button>
            <button onClick={() => setIsOpen(true)} aria-label={`Shopping bag with ${itemCount} items`} className="group relative grid h-10 w-10 place-items-center rounded-full bg-[#34261f] text-white transition duration-300 hover:-translate-y-1 hover:rotate-3 hover:bg-[#ef6b75]">
              <ShoppingBag size={18} className="transition group-hover:scale-110"/>
              {itemCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#f6c957] px-1 text-[10px] font-bold text-[#34261f]">{itemCount}</span>}
            </button>
            <button aria-label="Open menu" className="grid h-10 w-10 place-items-center md:hidden"><Menu size={22}/></button>
          </div>
        </nav>
      </header>

      <div onClick={() => setIsOpen(false)} className={`fixed inset-0 z-[60] bg-[#34261f]/35 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}/>
      <aside className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#fffaf3] shadow-2xl transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!isOpen}>
        <div className="flex items-center justify-between border-b border-[#eadfd6] px-6 py-5">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#ef6b75]">Your order</p><h2 className="mt-1 text-2xl font-bold">Scoops in your bag</h2></div>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart" className="grid h-10 w-10 place-items-center rounded-full bg-white transition hover:rotate-90 hover:text-[#ef6b75]"><X size={20}/></button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="text-6xl">🍨</div><h3 className="mt-5 text-2xl font-bold">Your bag is empty</h3>
            <p className="mt-2 text-sm leading-6 text-[#715f55]">A little ice cream would look really good in here.</p>
            <a href="/flavours" onClick={() => setIsOpen(false)} className="mt-6 rounded-full bg-[#34261f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#ef6b75]">Explore flavours</a>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {items.map((item) => (
                <div key={item.name} className="flex gap-4 rounded-2xl border border-[#eadfd6] bg-white p-3">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover"/>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2"><h3 className="truncate font-bold">{item.name}</h3><button onClick={() => removeItem(item.name)} aria-label={`Remove ${item.name}`} className="text-[#9a8578] hover:text-[#ef6b75]"><Trash2 size={16}/></button></div>
                    <p className="mt-1 text-sm font-bold text-[#ef6b75]">${item.price.toFixed(2)}</p>
                    <div className="mt-2 inline-flex items-center rounded-full border border-[#eadfd6]">
                      <button onClick={() => decreaseItem(item.name)} aria-label={`Decrease ${item.name}`} className="grid h-7 w-7 place-items-center"><Minus size={13}/></button>
                      <span className="w-7 text-center text-xs font-bold">{item.quantity}</span>
                      <button onClick={() => addItem(item)} aria-label={`Increase ${item.name}`} className="grid h-7 w-7 place-items-center"><Plus size={13}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#eadfd6] bg-white p-6">
              <div className="mb-4 flex items-center justify-between"><span className="text-[#715f55]">Subtotal</span><span className="text-2xl font-bold">${total.toFixed(2)}</span></div>
              <a href="/checkout" onClick={() => setIsOpen(false)} className="block w-full rounded-full bg-[#34261f] py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#ef6b75]">Continue to checkout</a>
              <p className="mt-3 text-center text-xs text-[#9a8578]">Taxes calculated at checkout</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
};
export default Navbar;
