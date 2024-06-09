import React from 'react'
import Testimonial from './Testimonial'
import { iceCreamReviews } from './Review'
import { Button } from '@/components/ui/button'


interface TestimonialsProps{
  iceCreamReviews: any
}

const Testimonials: React.FC<TestimonialsProps> = ({iceCreamReviews}) => {
  return (
    <div className='flex flex-col w-full px-4 my-8'>
      <div className='flex flex-row justify-between p-4'>
        <div className='flex flex-row'>
          <div>
          <h1 className='font-bold md:text-3xl text-2xl'>Happier Test Buds! </h1>
          </div>
          <div>
            
           <img src='/images/ball4.png' className='md:h-[50px] md:w-[50px] h-0 w-0'/>
          </div>
         </div>
        <Button className='bg-pink-400 md:px-8 px-2 py-2 font-semibold md:text-sm text-xs rounded-full text-white hover:bg-pink-600 hover:text-white'>See All</Button>
      </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3  gap-4 p-4'>
     {iceCreamReviews.map((person: any, index: any) => (
      <Testimonial
      key={index}
      image = {person.image}
      name= {person.name}
      comment={person.comment}
      />
     ))}
    </div>
    </div>
  )
}

export default Testimonials
