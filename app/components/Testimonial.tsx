import { IceCreamReview } from './Review';

const Testimonial: React.FC<IceCreamReview> = ({name, comment, image}) => (
  <article className="card-reveal rounded-[1.5rem] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:rotate-[-.5deg] soft-shadow">
    <div className="mb-5 tracking-wider text-[#e9a536]">★★★★★</div>
    <p className="min-h-12 text-base leading-6 text-[#594941]">&ldquo;{comment}&rdquo;</p>
    <div className="mt-6 flex items-center gap-3">
      <img src={image} alt={name} className="h-11 w-11 rounded-full object-cover"/>
      <div><p className="font-bold">{name}</p><p className="text-xs text-[#9a8578]">Verified customer</p></div>
    </div>
  </article>
);
export default Testimonial;
