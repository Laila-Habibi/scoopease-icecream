import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Info = () => {
  return (
    <div className=' border-t border-t-gray-200 border-t-solid mb-12'>
      <div className='flex md:flex-row flex-col justify-between px-4'>
        <div className='flex flex-row space-x-3 text-center justify-center'>
          <div className=' py-4 md:pr-4 flex flex-row md:justify-center text-center'>
            <div className='-mr-4'>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
            <div className='-mr-4'>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
            <div className='-mr-4'>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
            <div>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
           </div>
        <div className='py-4 md:border-r md:pr-4 flex flex-col justify-center text-center'>
          <p className='font-bold text-lg'>40k + reviews</p>
        </div>
        </div>
       
        <div className='p-4 flex flex-row space-x-2 md:w-2/5'>
          <div className='flex flex-col justify-center'>
          <img src='/images/19.png'  alt='image' className='rounded-2xl h-[50px] w-[150px]' />
          </div>
          <div className='flex flex-col justify-center'>
              <p className='font-sm text-xs'>As the sun beats down on the bustling city streets, 
            there is one oasis that offers a welcome respite - the charming Frozen Delight.</p>
          </div>
          <div className='flex flex-col justify-center'>
          <img src='/images/19.png'  alt='image' className='rounded-2xl h-[50px] w-[150px]' />
          </div>
          </div>
          <div className='flex flex-row md:space-x-3 space-x-16 md:p-4 md:border-l md:pl-4 justify-center'>
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
