import Image from 'next/image';

const About = () => (
  <section id="about" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
    <div className="section-reveal mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-[#f8dadd]"/>
        <Image src="/images/8.png" height={560} width={560} alt="A colourful Scoopease ice cream creation" className="relative aspect-square w-full rounded-[2rem] object-cover soft-shadow"/>
        <div className="animate-float absolute -bottom-6 right-5 rounded-2xl bg-[#f6c957] px-6 py-4 font-serif text-xl font-bold">Made with joy ✦</div>
      </div>
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">The Scoopease story</p>
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">Simple ingredients.<br/>Seriously good scoops.</h2>
        <p className="mt-6 max-w-xl leading-7 text-[#715f55]">We make every batch from scratch, pairing nostalgic favourites with unexpected seasonal ingredients. The result is ice cream that tastes familiar—and still manages to surprise you.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="group rounded-2xl border border-[#eadfd6] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#ef6b75] hover:shadow-lg"><div className="mb-3 text-2xl transition duration-300 group-hover:scale-125 group-hover:rotate-6">🥛</div><h3 className="text-lg font-bold">Real ingredients</h3><p className="mt-1 text-sm leading-6 text-[#715f55]">Fresh dairy, ripe fruit, and nothing you can&apos;t pronounce.</p></div>
          <div className="group rounded-2xl border border-[#eadfd6] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#ef6b75] hover:shadow-lg"><div className="mb-3 text-2xl transition duration-300 group-hover:scale-125 group-hover:-rotate-6">🍦</div><h3 className="text-lg font-bold">Churned daily</h3><p className="mt-1 text-sm leading-6 text-[#715f55]">Made in small batches for the creamiest possible scoop.</p></div>
        </div>
      </div>
    </div>
  </section>
);
export default About;
