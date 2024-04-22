import React from 'react'
import Image from 'next/image'
import Info from './Info'
import 'animate.css';

const Head = () => {
  return (
    <div className=' flex flex-col'>
      <div className="grid grid-cols-12 gap-4 px-4">
  <div className="col-span-3 p-4 my-auto ">
  <h1 className='font-bold text-5xl mb-3'>Scoopease</h1>
        <p className='font-sm text-sm mb-8'>In the heart of the bustling city, Scoops of Joy stands as a beacon of frozen delight,
           beckoning passers-by to indulge in the ultimate sweet treat.</p>
           <div className='space-y-3' >
              <p className='font-bold text-3xl text-yellow-400'>15 : 43: 32</p>
              <p className='font-bold text-2xl'>LIMITED OFFERS</p>
              <button className='font-bold text-lg bg-yellow-300 rounded-md px-4 py-2'>Order Now</button>
           </div>
  </div>
  <div className="col-span-6 p-4 flex flex-col justify-center">
   
  <Image src={'/images/3.png'} height={450} width={450} alt='image' 
  className='rounded-full border border-rounded-full p-2 '/>
  </div>
  <div className="col-span-3 p-4 my-auto">
    <div className='flex flex-row text-center space-x-2 '>
      <div className='flex flex-col justify-center'>
      <Image src={'/images/19.png'} height={50} width={50} alt='image' className=''/>
      </div>
    <div className='flex flex-col justify-center '>
    <p className='font-bold text-2xl '>ICE CREAM</p>
    </div>
   
    </div>
   
  <Image src={'/images/18.png'} height={200} width={200} alt='image' className='my-auto'/>
  <p className='font-bold text-center'>Our Icecream is availabe in a variety of flavours.</p>
  </div>
</div>

<Info/>
     
    </div>
  )
}

export default Head
