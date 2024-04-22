import React from 'react'
import Image from 'next/image'

const Info = () => {
  return (
    <div className=' border-t border-t-gray-200 border-t-solid mb-12'>
      <div className='flex flex-row justify-between px-4'>
        <div className='p-4 border-r pr-4 flex flex-col justify-center'>
          <p className='font-bold text-lg'>40k + reviews</p>
        </div>
        <div className='p-4 flex flex-row space-x-2 w-2/5'>
          <div className='flex flex-col justify-center'>
          <img src='/images/19.png'  alt='image' className='rounded-2xl h-[50px] w-[150px]' />
          </div>
          <div className='flex flex-col justify-center'>
              <p className='font-sm text-xs'>As the sun beats down on the bustling city streets, 
            there's one oasis that offers a welcome respite - the charming Frozen Delight.</p>
          </div>
          <div className='flex flex-col justify-center'>
          <img src='/images/19.png'  alt='image' className='rounded-2xl h-[50px] w-[150px]' />
          </div>
          </div>
          <div className='flex flex-row space-x-3 p-4 border-l pl-4 r'>
            <div className='flex flex-col space-x-1 text-center justify-center '>
              <p className='font-bold text-lg '>540k+</p>
              <p className='text-xs font-xs'>Visitors Per Day</p>
            </div>
            <div className='flex flex-col space-x-1 text-center justify-center'>
              <p className='font-bold text-lg'>540k+</p>
              <p className='text-xs font-xs'>Visitors Per Day</p>
            </div>
          </div>
        </div>
        
      </div>
    
  )
}

export default Info
