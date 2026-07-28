'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ChevronDown, Quote, Star } from 'lucide-react';
import { iceCreamReviews } from '../components/Review';

const reviewDetails = [
  {rating: 5, flavour: 'Vanilla Bean', date: '2 days ago'},
  {rating: 5, flavour: 'Strawberry Swirl', date: '4 days ago'},
  {rating: 5, flavour: 'Chocolate Chip', date: '1 week ago'},
  {rating: 4, flavour: 'Mint Chocolate Chip', date: '1 week ago'},
  {rating: 5, flavour: 'Cookie Dough', date: '2 weeks ago'},
  {rating: 4, flavour: 'Butter Pecan', date: '2 weeks ago'},
  {rating: 5, flavour: 'Rocky Road', date: '3 weeks ago'},
  {rating: 5, flavour: 'Neapolitan', date: '1 month ago'},
];

const reviews = iceCreamReviews.map((review, index) => ({...review, ...reviewDetails[index], order: index}));

export default function ReviewsPage() {
  const [rating, setRating] = useState('All ratings');
  const [sort, setSort] = useState('Newest');

  const visibleReviews = useMemo(() => {
    const filtered = rating === 'All ratings'
      ? reviews
      : reviews.filter((review) => review.rating === Number(rating[0]));

    return [...filtered].sort((a, b) => {
      if (sort === 'Highest rated') return b.rating - a.rating;
      if (sort === 'Lowest rated') return a.rating - b.rating;
      return a.order - b.order;
    });
  }, [rating, sort]);

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#f8dadd]/70 blur-3xl"/>
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#f6c957]/30 blur-3xl"/>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.9fr]">
          <div className="relative z-10">
            <div className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-[#ecd8ca] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#9b5b3d]">
              <Quote size={15} className="text-[#ef6b75]"/> Straight from the scoop lovers
            </div>
            <h1 className="animate-rise-delay-1 text-balance text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl">
              Kind words from<br/><span className="text-[#ef6b75]">happy taste buds.</span>
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-7 text-[#715f55] sm:text-lg">
              The sweetest part of what we do is hearing what you think. Here are a few notes from the people who make our counter such a joyful place.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex items-center gap-4">
              <strong className="font-serif text-5xl">4.8</strong>
              <div><div className="flex gap-0.5 text-[#e9a536]">{[1,2,3,4,5].map((item) => <Star key={item} size={18} fill="currentColor"/>)}</div><p className="mt-1 text-sm font-semibold">Based on 40,000+ reviews</p></div>
            </div>
          </div>

          <div className="animate-scale-in relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-6 rounded-[3rem] bg-[#f6c957]"/>
            <Image src="/images/12.png" alt="A happy Scoopease customer" width={520} height={560} priority className="relative aspect-[.95/1] w-full rounded-[2.75rem] object-cover soft-shadow"/>
            <div className="animate-float absolute -bottom-5 -left-5 max-w-[210px] rounded-2xl bg-white p-5 soft-shadow">
              <div className="flex text-[#e9a536]">★★★★★</div>
              <p className="mt-2 font-serif text-lg font-bold leading-5">&ldquo;My new happy place.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal grid gap-10 rounded-[2rem] border border-[#eadfd6] p-7 sm:p-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">Overall rating</p>
              <div className="mt-3 flex items-end gap-3"><strong className="font-serif text-6xl">4.8</strong><span className="mb-2 text-sm text-[#715f55]">out of 5</span></div>
              <div className="mt-2 flex text-[#e9a536]">{[1,2,3,4,5].map((item) => <Star key={item} size={17} fill="currentColor"/>)}</div>
            </div>
            <div className="space-y-3">
              {[
                {stars: 5, width: '88%', count: '35.2k'},
                {stars: 4, width: '9%', count: '3.6k'},
                {stars: 3, width: '2%', count: '800'},
                {stars: 2, width: '0.7%', count: '280'},
                {stars: 1, width: '0.3%', count: '120'},
              ].map((row) => (
                <div key={row.stars} className="grid grid-cols-[42px_1fr_45px] items-center gap-3 text-xs">
                  <span className="font-bold">{row.stars} star</span>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[#f3ebe5]"><div style={{width: row.width}} className="h-full rounded-full bg-[#f6c957]"/></div>
                  <span className="text-right text-[#9a8578]">{row.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#ef6b75]">Customer notes</p><h2 className="text-4xl font-semibold tracking-[-.03em] sm:text-5xl">The scoop on Scoopease</h2></div>
            <div className="flex flex-wrap gap-3">
              <label className="relative">
                <span className="sr-only">Filter by rating</span>
                <select value={rating} onChange={(event) => setRating(event.target.value)} className="h-11 appearance-none rounded-full border border-[#e4d8ce] bg-[#fffaf3] py-2 pl-5 pr-10 text-sm font-bold outline-none focus:border-[#ef6b75]">
                  <option>All ratings</option><option>5 stars</option><option>4 stars</option>
                </select>
                <ChevronDown size={15} className="pointer-events-none absolute right-4 top-3.5"/>
              </label>
              <label className="relative">
                <span className="sr-only">Sort reviews</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-11 appearance-none rounded-full border border-[#e4d8ce] bg-[#fffaf3] py-2 pl-5 pr-10 text-sm font-bold outline-none focus:border-[#ef6b75]">
                  <option>Newest</option><option>Highest rated</option><option>Lowest rated</option>
                </select>
                <ChevronDown size={15} className="pointer-events-none absolute right-4 top-3.5"/>
              </label>
            </div>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {visibleReviews.map((review) => (
              <article key={review.name} className="card-reveal group rounded-[2rem] border border-[#eadfd6] bg-[#fffaf3] p-6 transition duration-300 hover:-translate-y-1 hover:soft-shadow sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="h-12 w-12 rounded-full object-cover"/>
                    <div><h3 className="font-bold">{review.name}</h3><span className="flex items-center gap-1 text-xs text-[#66a36d]"><CheckCircle2 size={13}/> Verified customer</span></div>
                  </div>
                  <span className="text-xs text-[#9a8578]">{review.date}</span>
                </div>
                <div className="mt-5 flex text-[#e9a536]">{[1,2,3,4,5].map((item) => <Star key={item} size={15} fill={item <= review.rating ? 'currentColor' : 'none'}/>)}</div>
                <p className="mt-4 font-serif text-xl leading-7">&ldquo;{review.comment}&rdquo;</p>
                <div className="mt-5 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#715f55]">Favourite: {review.flavour}</div>
              </article>
            ))}
          </div>

          {visibleReviews.length === 0 && <div className="mt-10 rounded-[2rem] border border-dashed border-[#d9c8bc] px-6 py-16 text-center"><div className="text-4xl">💌</div><h3 className="mt-4 text-2xl font-bold">No reviews at this rating yet</h3></div>}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="section-reveal relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-[#f6c957] px-7 py-12 sm:px-12 lg:flex-row lg:items-center lg:py-14">
          <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full border-[38px] border-white/20"/>
          <div className="relative"><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#8c5a17]">Ready for your first scoop?</p><h2 className="text-balance text-3xl font-semibold sm:text-4xl">Come see what everyone is smiling about.</h2></div>
          <a href="/flavours" className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#34261f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#ef6b75]">Find your flavour <ArrowRight size={17}/></a>
        </div>
      </section>
    </main>
  );
}
