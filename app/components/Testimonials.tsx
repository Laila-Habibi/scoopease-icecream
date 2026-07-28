import Testimonial from './Testimonial';

const Testimonials = ({iceCreamReviews}: {iceCreamReviews: any[]}) => (
  <section id="reviews" className="bg-[#f8dadd] px-5 py-20 sm:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="section-reveal mb-10 text-center"><p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-[#b64e5d]">The word on the street</p><h2 className="text-4xl font-semibold tracking-[-.03em] sm:text-5xl">Happy taste buds</h2></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {iceCreamReviews.slice(0,4).map((person, index) => <Testimonial key={index} {...person}/>)}
      </div>
    </div>
  </section>
);
export default Testimonials;
