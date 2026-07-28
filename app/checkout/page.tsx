'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, CheckCircle2, CreditCard, LockKeyhole, Minus, Plus, ShieldCheck, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../components/CartProvider';

const Field = ({label, name, type = 'text', placeholder, required = true, className = ''}: {label: string; name: string; type?: string; placeholder: string; required?: boolean; className?: string}) => (
  <label className={`block ${className}`}>
    <span className="mb-2 block text-sm font-bold">{label}{required && <span className="ml-1 text-[#ef6b75]">*</span>}</span>
    <input name={name} type={type} placeholder={placeholder} required={required} className="h-12 w-full rounded-xl border border-[#dfd2c8] bg-[#fffaf3] px-4 text-sm outline-none transition placeholder:text-[#a89689] focus:border-[#ef6b75] focus:ring-4 focus:ring-[#ef6b75]/10"/>
  </label>
);

export default function CheckoutPage() {
  const {items, itemCount, total, addItem, decreaseItem, removeItem, clearCart} = useCart();
  const [delivery, setDelivery] = useState<'pickup' | 'delivery'>('pickup');
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const deliveryFee = delivery === 'delivery' ? 4.5 : 0;
  const tax = total * 0.08;
  const grandTotal = total + tax + deliveryFee;

  const placeOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!items.length) return;
    setProcessing(true);
    window.setTimeout(() => {
      setProcessing(false);
      setSubmitted(true);
      clearCart();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 900);
  };

  if (submitted) {
    return (
      <main className="grid min-h-[calc(100vh-80px)] place-items-center px-5 py-20">
        <section className="animate-scale-in w-full max-w-xl rounded-[2.5rem] border border-[#eadfd6] bg-white p-8 text-center soft-shadow sm:p-12">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#dcebd7] text-[#4c8554]"><Check size={38} strokeWidth={3}/></div>
          <p className="mt-7 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">Order confirmed</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Your scoops are on the way!</h1>
          <p className="mx-auto mt-5 max-w-md leading-7 text-[#715f55]">Thanks for your order. We&apos;ve sent a confirmation to your email and will start preparing everything shortly.</p>
          <div className="mx-auto mt-7 max-w-sm rounded-2xl bg-[#fffaf3] p-5">
            <div className="flex justify-between text-sm"><span className="text-[#715f55]">Order number</span><strong>#SCP-{Math.floor(10000 + Math.random() * 89999)}</strong></div>
            <div className="mt-3 flex justify-between text-sm"><span className="text-[#715f55]">Estimated time</span><strong>{delivery === 'pickup' ? '15–20 min' : '30–40 min'}</strong></div>
          </div>
          <Link href="/flavours" className="mt-8 inline-flex rounded-full bg-[#34261f] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ef6b75]">Keep exploring flavours</Link>
        </section>
      </main>
    );
  }

  if (!items.length) {
    return (
      <main className="grid min-h-[calc(100vh-80px)] place-items-center px-5 py-20">
        <section className="max-w-lg text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#f8dadd] text-5xl">🍨</div>
          <h1 className="mt-7 text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Nothing to check out yet</h1>
          <p className="mt-4 leading-7 text-[#715f55]">Your bag is waiting for something delicious. Pick a few scoops and come back when you&apos;re ready.</p>
          <Link href="/flavours" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#34261f] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ef6b75]"><ShoppingBag size={17}/> Explore flavours</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="px-5 py-12 sm:px-8 lg:py-16">
      <form onSubmit={placeOrder} className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Link href="/flavours" className="inline-flex items-center gap-2 text-sm font-bold text-[#715f55] transition hover:text-[#ef6b75]"><ArrowLeft size={16}/> Continue shopping</Link>
          <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">Almost there</p><h1 className="mt-2 text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Checkout</h1></div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#4c8554]"><LockKeyhole size={15}/> Secure, encrypted checkout</div>
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px]">
          <div className="space-y-7">
            <section className="rounded-[2rem] border border-[#eadfd6] bg-white p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#f8dadd] text-sm font-bold">1</span><h2 className="text-2xl font-bold">Contact details</h2></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" placeholder="Laila"/>
                <Field label="Last name" name="lastName" placeholder="Habibi"/>
                <Field label="Email address" name="email" type="email" placeholder="you@example.com" className="sm:col-span-2"/>
                <Field label="Phone number" name="phone" type="tel" placeholder="(555) 123-4567" className="sm:col-span-2"/>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#eadfd6] bg-white p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#fae7a7] text-sm font-bold">2</span><h2 className="text-2xl font-bold">How would you like it?</h2></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <button type="button" onClick={() => setDelivery('pickup')} className={`rounded-2xl border p-5 text-left transition ${delivery === 'pickup' ? 'border-[#ef6b75] bg-[#f8dadd]/35 ring-2 ring-[#ef6b75]/10' : 'border-[#dfd2c8] hover:border-[#ef6b75]'}`}>
                  <div className="flex items-center justify-between"><strong>Store pickup</strong>{delivery === 'pickup' && <CheckCircle2 size={19} className="text-[#ef6b75]"/>}</div><p className="mt-2 text-sm text-[#715f55]">Ready in 15–20 minutes</p><span className="mt-3 block text-sm font-bold text-[#4c8554]">Free</span>
                </button>
                <button type="button" onClick={() => setDelivery('delivery')} className={`rounded-2xl border p-5 text-left transition ${delivery === 'delivery' ? 'border-[#ef6b75] bg-[#f8dadd]/35 ring-2 ring-[#ef6b75]/10' : 'border-[#dfd2c8] hover:border-[#ef6b75]'}`}>
                  <div className="flex items-center justify-between"><strong>Local delivery</strong>{delivery === 'delivery' && <CheckCircle2 size={19} className="text-[#ef6b75]"/>}</div><p className="mt-2 text-sm text-[#715f55]">At your door in 30–40 minutes</p><span className="mt-3 block text-sm font-bold">$4.50</span>
                </button>
              </div>
              {delivery === 'delivery' && <div className="mt-6 grid animate-rise gap-5 sm:grid-cols-2"><Field label="Street address" name="address" placeholder="123 Main Street" className="sm:col-span-2"/><Field label="City" name="city" placeholder="Halifax"/><Field label="Postal code" name="postalCode" placeholder="B3H 1A1"/></div>}
            </section>

            <section className="rounded-[2rem] border border-[#eadfd6] bg-white p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#dcebd7] text-sm font-bold">3</span><h2 className="text-2xl font-bold">Payment</h2></div>
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-[#ef6b75] bg-[#f8dadd]/25 p-4"><div className="flex items-center gap-3"><CreditCard size={21}/><strong className="text-sm">Credit or debit card</strong></div><CheckCircle2 size={18} className="text-[#ef6b75]"/></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Card number" name="cardNumber" placeholder="4242 4242 4242 4242" className="sm:col-span-2"/>
                <Field label="Expiry date" name="expiry" placeholder="MM / YY"/>
                <Field label="Security code" name="cvc" placeholder="CVC"/>
                <Field label="Name on card" name="cardName" placeholder="Laila Habibi" className="sm:col-span-2"/>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#715f55]"><ShieldCheck size={16} className="text-[#4c8554]"/> Your payment details are encrypted and secure.</div>
            </section>
          </div>

          <aside className="top-28 rounded-[2rem] border border-[#eadfd6] bg-white p-6 soft-shadow lg:sticky">
            <div className="flex items-center justify-between"><h2 className="text-2xl font-bold">Your order</h2><span className="rounded-full bg-[#f8dadd] px-3 py-1 text-xs font-bold">{itemCount} items</span></div>
            <div className="my-6 max-h-[330px] space-y-4 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.name} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover"/>
                  <div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><h3 className="truncate text-sm font-bold">{item.name}</h3><strong className="text-sm">${(item.price * item.quantity).toFixed(2)}</strong></div>
                    <div className="mt-2 inline-flex items-center rounded-full border border-[#eadfd6]">
                      <button type="button" onClick={() => decreaseItem(item.name)} className="grid h-6 w-6 place-items-center" aria-label={`Decrease ${item.name}`}><Minus size={11}/></button><span className="w-6 text-center text-[11px] font-bold">{item.quantity}</span><button type="button" onClick={() => addItem(item)} className="grid h-6 w-6 place-items-center" aria-label={`Increase ${item.name}`}><Plus size={11}/></button>
                    </div>
                  </div>
                  <button type="button" onClick={() => removeItem(item.name)} aria-label={`Remove ${item.name}`} className="self-end text-[#9a8578] hover:text-[#ef6b75]"><Trash2 size={15}/></button>
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t border-[#eadfd6] pt-5 text-sm">
              <div className="flex justify-between"><span className="text-[#715f55]">Subtotal</span><span>${total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-[#715f55]">Delivery</span><span>{deliveryFee ? `$${deliveryFee.toFixed(2)}` : 'Free'}</span></div>
              <div className="flex justify-between"><span className="text-[#715f55]">Estimated tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="flex justify-between border-t border-[#eadfd6] pt-4 text-lg font-bold"><span>Total</span><span>${grandTotal.toFixed(2)}</span></div>
            </div>
            <button disabled={processing} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#34261f] py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ef6b75] disabled:cursor-wait disabled:opacity-70">{processing ? 'Placing your order...' : <><LockKeyhole size={15}/> Place order · ${grandTotal.toFixed(2)}</>}</button>
          </aside>
        </div>
      </form>
    </main>
  );
}
