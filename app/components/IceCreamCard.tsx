import React from 'react'
import iceCreamData from './IceCreamData'
import { Button } from '@/components/ui/button';


  export interface IceCreamProps {
    image: string;
    name: string;
    rating: number;
    price: number;
  }

const IceCreamCard: React.FC<IceCreamProps> = ({image, name, rating, price}) => {
  return (
    <div>
                 
                    <div className='flex flex-col justify-center '>
                        <div>
                        <img src={image} className='md:h-[250px] w-[250px] h-[150px] rounded-lg  hover:p-1' alt='image'/>
                        </div>
                        <div className='flex flex-row justify-between pr-2'>
                           <div className='font-semibold hover:text-rose-500 hover:cursor-pointer'>
                               {name}
                           </div>
                           <div className='hover:text-rose-500 hover:cursor-pointer'>
                                {rating}
                           </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                        <div className='font-bold text-lg hover:text-rose-500 hover:cursor-pointer'>
                            ${price}
                        </div>
                        <div className='pr-2'>
                           <button className='text-xs font-sm bg-yellow-400 px-2 py-1 rounded-full hover:bg-yellow-500'>Buy</button>
                         </div>
                        </div>
                      
                  

                    </div>
              
    
    
    </div>
  )
}

export default IceCreamCard
