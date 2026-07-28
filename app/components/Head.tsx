import Image from 'next/image';
import { ArrowRight, Leaf, Star } from 'lucide-react';

const Head = () => (
  <section className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-16">
    <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#f8dadd]/60 blur-3xl"/>
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
      <div className="relative z-10">
        <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#ecd8ca] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#9b5b3d]">
          <Leaf size={15} className="text-[#66a36d]"/> Made fresh every morning
        </div>
        <h1 className="animate-rise-delay-1 text-balance text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl">
          Happiness,<br/><span className="text-[#ef6b75]">one scoop</span> at a time.
        </h1>
        <p className="animate-rise-delay-2 mt-6 max-w-lg text-base leading-7 text-[#715f55] sm:text-lg">Small-batch ice cream made with real ingredients, playful flavours, and a little bit of everyday magic.</p>
        <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center gap-5">
          <a href="#flavours" className="inline-flex items-center gap-2 rounded-full bg-[#34261f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ef6b75]">Explore flavours <ArrowRight size={17}/></a>
          <div><div className="flex text-[#e9a536]">{[1,2,3,4,5].map(n=><Star key={n} size={14} fill="currentColor"/>)}</div><span className="text-xs font-semibold">Loved by 40k+ foodies</span></div>
        </div>
      </div>
      <div className="animate-scale-in relative mx-auto w-full max-w-[590px]">
        <div className="absolute inset-8 rotate-6 rounded-[4rem] bg-[#f5c952]"/>
        <div className="animate-float absolute right-0 top-7 z-20 rounded-2xl bg-white p-4 soft-shadow">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#9a8578]">Today&apos;s favourite</div>
          <div className="font-serif text-lg font-bold">Strawberry dream</div>
        </div>
        <div className="relative overflow-hidden rounded-[3.5rem] bg-[#f8dadd] p-6 soft-shadow sm:p-10">
          <Image src="/images/3.png" width={650} height={650} priority alt="Strawberry ice cream sundae" className="aspect-square w-full rounded-[2.8rem] object-cover transition duration-700 hover:scale-105"/>
        </div>
        <div className="animate-float-delayed absolute -bottom-5 left-5 z-20 rounded-2xl bg-[#34261f] px-5 py-4 text-white soft-shadow"><span className="block text-xs text-white/60">Starting from</span><span className="font-serif text-2xl font-bold">$3.75</span></div>
      </div>
    </div>
  </section>
);
export default Head;
