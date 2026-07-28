import Image from 'next/image';
import { ArrowRight, Heart, Leaf, Milk, Sparkles, Sun } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Ingredients first',
    text: 'We choose ripe fruit, fresh dairy, and honest ingredients that taste wonderful all on their own.',
    colour: 'bg-[#dcebd7]',
  },
  {
    icon: Heart,
    title: 'Made with care',
    text: 'Every flavour is mixed, tasted, and perfected by people who genuinely love making ice cream.',
    colour: 'bg-[#f8dadd]',
  },
  {
    icon: Sun,
    title: 'Joy in every scoop',
    text: 'Our shop is designed to turn an ordinary afternoon into a small, delicious celebration.',
    colour: 'bg-[#fae7a7]',
  },
];

const process = [
  {number: '01', title: 'Find the good stuff', text: 'We source real, seasonal ingredients from producers we trust.'},
  {number: '02', title: 'Dream up a flavour', text: 'Classic favourites meet playful ideas in our tiny test kitchen.'},
  {number: '03', title: 'Churn it slowly', text: 'Small batches create the smooth, rich texture we are known for.'},
  {number: '04', title: 'Share the joy', text: 'Each fresh batch goes straight to the counter, ready for you.'},
];

export default function OurStoryPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#f8dadd]/70 blur-3xl"/>
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f6c957]/30 blur-3xl"/>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative z-10">
            <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#ecd8ca] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#9b5b3d]">
              <Sparkles size={15} className="text-[#ef6b75]"/> Our little love story
            </div>
            <h1 className="animate-rise-delay-1 text-balance text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl">
              It started with<br/><span className="text-[#ef6b75]">one happy scoop.</span>
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-7 text-[#715f55] sm:text-lg">
              Scoopease began with a simple belief: the best ice cream does not need to be complicated. It just needs great ingredients, patient hands, and a reason to make someone smile.
            </p>
          </div>

          <div className="animate-scale-in relative mx-auto w-full max-w-[570px]">
            <div className="absolute -inset-3 -rotate-3 rounded-[3rem] bg-[#f6c957]"/>
            <Image src="/images/8.png" width={650} height={650} priority alt="The colourful beginnings of Scoopease" className="relative aspect-[1.05/1] w-full rounded-[2.75rem] object-cover soft-shadow"/>
            <div className="animate-float absolute -bottom-6 right-5 rounded-2xl bg-[#34261f] px-6 py-4 text-white soft-shadow">
              <span className="block text-xs text-white/60">Churning joy since</span>
              <span className="font-serif text-2xl font-bold">2018</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="section-reveal mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] bg-[#f8dadd]"/>
            <Image src="/images/3.png" width={560} height={650} alt="A handmade Scoopease sundae" className="relative aspect-[4/4.6] w-full rounded-[2rem] object-cover soft-shadow"/>
            <div className="absolute -right-5 top-10 grid h-24 w-24 rotate-6 place-items-center rounded-full bg-[#f6c957] text-center text-xs font-bold uppercase leading-4 tracking-wider">Small<br/>batch<br/>magic</div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">Where it began</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">A tiny kitchen and a very big idea.</h2>
            <div className="mt-6 space-y-5 leading-7 text-[#715f55]">
              <p>Our first batch was made after hours in a borrowed neighbourhood kitchen. It was strawberry—slightly too soft, a little too pink, and completely unforgettable.</p>
              <p>Friends asked for seconds. Then their friends did too. Before long, weekend experiments became a little shop built around slow churning, generous scoops, and flavours that feel like memories.</p>
              <p>Today, we still work the same way: tasting everything, making small batches, and never sending a flavour to the counter unless we are excited to eat it ourselves.</p>
            </div>
            <div className="mt-8 flex gap-8 border-t border-[#eadfd6] pt-7">
              <div><strong className="block font-serif text-3xl">40k+</strong><span className="text-xs text-[#9a8578]">happy foodies</span></div>
              <div><strong className="block font-serif text-3xl">8</strong><span className="text-xs text-[#9a8578]">signature flavours</span></div>
              <div><strong className="block font-serif text-3xl">1</strong><span className="text-xs text-[#9a8578]">joyful mission</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">What matters to us</p>
            <h2 className="text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Our recipe for happiness</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({icon: Icon, title, text, colour}) => (
              <article key={title} className="card-reveal group rounded-[2rem] border border-[#eadfd6] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:soft-shadow">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${colour} transition duration-300 group-hover:rotate-6 group-hover:scale-110`}><Icon size={24}/></div>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[#715f55]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#34261f] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#f6c957]">From idea to cone</p><h2 className="text-4xl font-semibold tracking-[-.03em] sm:text-5xl">How the magic happens</h2></div>
            <div className="flex items-center gap-2 text-sm text-white/60"><Milk size={18}/> Churned fresh every morning</div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="group bg-[#34261f] p-7 transition hover:bg-white/[.06]">
                <span className="font-serif text-4xl font-bold text-[#f6c957] transition group-hover:text-[#ef6b75]">{step.number}</span>
                <h3 className="mt-10 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="section-reveal relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-[#f8dadd] px-7 py-12 sm:px-12 lg:flex-row lg:items-center lg:py-14">
          <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full border-[38px] border-white/25"/>
          <div className="relative"><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#b64e5d]">Now taste the story</p><h2 className="text-balance text-3xl font-semibold sm:text-4xl">Meet the scoops that make us, us.</h2></div>
          <a href="/flavours" className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#34261f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ef6b75]">Explore our flavours <ArrowRight size={17}/></a>
        </div>
      </section>
    </main>
  );
}
