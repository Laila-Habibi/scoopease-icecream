import React from 'react'
import Image from 'next/image'
import { IceCreamReview, iceCreamReviews } from './Review'

const Testimonial:React.FC<IceCreamReview> = ({name, comment, image}) => {
  return (
    <div className='flex flex-row text-center gap-4'>
      <div className='image'>
        <img src= {image} alt='image' className='md:rounded-full md:h-36 md:w-36 rounded h-24 w-24'/>
        {/* <Image src={image} height={100} width={100} alt='image' className='rounded-full'/> */}
      </div>
      <div className='text flex flex-col justify-center text-start'>
         <p className='font-semibold hover:text-pink-500'>{name}</p>
         <p className='text-gray-700 text-sm'>{comment}</p>
      </div>
    </div>
  )
}

export default Testimonial
