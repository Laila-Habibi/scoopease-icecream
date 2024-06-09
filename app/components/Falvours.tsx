import React from 'react'
import IceCreamCard from './IceCreamCard'
import { Button } from '@/components/ui/button'


interface FalvoursProps{
  iceCreamData : any
}

const Falvours: React.FC<FalvoursProps> = ({iceCreamData}) => {
  return (
    <div className='flex flex-col w-full px-4 my-8'>
      <div className='flex flex-row justify-between p-4'>
        <div className='flex flex-row space-x-2'>
          <div>
          <h1 className='font-bold md:text-3xl text-2xl'>Flavours Of The Week</h1>
          </div>
          <div>
            <img src='/images/ball2.png' className='md:h-[50px] md:w-[70px] h-[30px] w-[30px]'/>
          </div>
         </div>
        <Button className='bg-yellow-400 md:px-8 px-2 py-2 font-semibold md:text-sm text-xs rounded-full text-black hover:bg-yellow-600 hover:text-white'>See All</Button>
      </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4'>
     {iceCreamData.map((product: any, index: any) => (
      <IceCreamCard
      key={index}
      image = {product.image}
      name= {product.name}
      rating={product.rating}
      price={product.price}
      />
     ))}
    </div>
    </div>
  )
}

export default Falvours
