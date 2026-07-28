'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import IceCreamCard from '../components/IceCreamCard';
import iceCreamData from '../components/IceCreamData';

const categories = ['All scoops', 'Classics', 'Fruity', 'Chocolate', 'Nutty'];

export default function FlavoursPage() {
  const [category, setCategory] = useState('All scoops');
  const [search, setSearch] = useState('');

  const flavours = useMemo(() => {
    return iceCreamData.filter((flavour) => {
      const matchesCategory = category === 'All scoops' || flavour.categories.includes(category);
      const matchesSearch = flavour.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#f8dadd]/70 blur-3xl"/>
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#f6c957]/30 blur-3xl"/>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <div className="relative z-10">
            <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#ecd8ca] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#9b5b3d]">
              <Sparkles size={15} className="text-[#ef6b75]"/> Eight ways to fall in love
            </div>
            <h1 className="animate-rise-delay-1 text-balance text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl">
              Find your new<br/><span className="text-[#ef6b75]">favourite flavour.</span>
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-7 text-[#715f55] sm:text-lg">
              From timeless vanilla bean to rich rocky road, every scoop is churned in small batches with ingredients worth celebrating.
            </p>
          </div>

          <div className="animate-scale-in relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-6 rounded-[3rem] bg-[#f6c957]"/>
            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#f8dadd] p-5 soft-shadow">
              <Image src="/images/7.png" alt="A selection of colourful ice cream flavours" width={520} height={520} priority className="aspect-square w-full rounded-[2.2rem] object-cover"/>
            </div>
            <div className="animate-float absolute -bottom-5 -left-5 rounded-2xl bg-[#34261f] px-5 py-4 text-white soft-shadow">
              <span className="block text-xs text-white/60">Freshly churned</span>
              <span className="font-serif text-xl font-bold">Every single day</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">The full scoop</p>
              <h2 className="text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Choose your mood</h2>
            </div>
            <label className="flex h-12 w-full items-center gap-3 rounded-full border border-[#e4d8ce] bg-[#fffaf3] px-5 transition focus-within:border-[#ef6b75] lg:w-80">
              <Search size={18} className="text-[#9a8578]"/>
              <span className="sr-only">Search flavours</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search flavours..." className="w-full bg-transparent text-sm outline-none placeholder:text-[#9a8578]"/>
            </label>
          </div>

          <div className="mt-9 flex items-center gap-3 overflow-x-auto pb-3">
            <SlidersHorizontal size={18} className="mr-1 shrink-0 text-[#9a8578]"/>
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${
                  category === item
                    ? 'bg-[#34261f] text-white shadow-lg'
                    : 'border border-[#e4d8ce] bg-[#fffaf3] text-[#715f55] hover:-translate-y-0.5 hover:border-[#ef6b75] hover:text-[#ef6b75]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {flavours.length > 0 ? (
            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {flavours.map((flavour) => <IceCreamCard key={flavour.name} {...flavour}/>)}
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-[#d9c8bc] bg-[#fffaf3] px-6 py-20 text-center">
              <div className="text-4xl">🍨</div>
              <h3 className="mt-4 text-2xl font-bold">No scoops found</h3>
              <p className="mt-2 text-[#715f55]">Try another search or flavour category.</p>
              <button onClick={() => { setSearch(''); setCategory('All scoops'); }} className="mt-5 rounded-full bg-[#34261f] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#ef6b75]">Show all flavours</button>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="section-reveal relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-[#f6c957] px-7 py-12 sm:px-12 lg:flex-row lg:items-center lg:py-14">
          <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full border-[38px] border-white/20"/>
          <div className="relative"><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#8c5a17]">Can&apos;t decide?</p><h2 className="text-balance text-3xl font-semibold sm:text-4xl">Build a box and try a little of everything.</h2></div>
          <button className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#34261f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ef6b75]">Build your box <ArrowRight size={17}/></button>
        </div>
      </section>
    </main>
  );
}
