import IceCreamCard from './IceCreamCard';
import { Button } from '@/components/ui/button';

const Falvours = ({iceCreamData}: {iceCreamData: any[]}) => (
  <section id="flavours" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
    <div className="mb-10 flex items-end justify-between gap-5">
      <div className="section-reveal"><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">Pick your pleasure</p><h2 className="text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Flavours of the week</h2></div>
      <Button asChild className="rounded-full bg-[#34261f] px-6 text-white hover:bg-[#ef6b75]"><a href="/flavours">View all</a></Button>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {iceCreamData.map((product, index) => <IceCreamCard key={index} {...product}/>)}
    </div>
  </section>
);
export default Falvours;
