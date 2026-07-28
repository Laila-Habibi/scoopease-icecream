'use client';

import { Plus, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './CartProvider';

export interface IceCreamProps { image: string; name: string; rating: number; price: number; }

const IceCreamCard: React.FC<IceCreamProps> = ({image, name, rating, price}) => {
  const {addItem} = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({image, name, price});
    setAdded(true);
    window.setTimeout(() => setAdded(false), 900);
  };

  return (
  <article className="card-reveal group rounded-[1.75rem] border border-[#eadfd6] bg-white p-3 transition duration-300 hover:-translate-y-2 hover:rotate-[.5deg] hover:soft-shadow">
    <div className="overflow-hidden rounded-[1.25rem] bg-[#f7eee6]">
      <img src={image} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" alt={name}/>
    </div>
    <div className="px-2 pb-2 pt-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <span className="flex items-center gap-1 text-xs font-bold"><Star size={13} fill="#f6c957" className="text-[#f6c957]"/>{rating}</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold">${price.toFixed(2)}</span>
        <button onClick={handleAdd} aria-label={`Add ${name} to bag`} className={`grid h-10 place-items-center rounded-full font-bold transition-all duration-300 hover:bg-[#ef6b75] hover:text-white ${added ? 'w-20 bg-[#66a36d] text-xs text-white' : 'w-10 bg-[#f6c957]'}`}>{added ? 'Added!' : <Plus size={18}/>}</button>
      </div>
    </div>
  </article>
  );
};
export default IceCreamCard;
