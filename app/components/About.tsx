import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex md:flex-row flex-col w-full px-4 my-8'>
      
  <div className='p-4 md:w-1/2 w-full relative my-auto flex flex-col'>
  <div className="absolute inset-0">
    
    <div className="bg-rose-300 md:h-[340px] md:w-[340px] h-[200px] w-[200px]  transform rotate-12 rounded-2xl"></div>
  </div>
  <div className="relative">
  <Image src='/images/8.png' height={400} width={400} alt='image' className='rounded-2xl' />
  </div>
   
 

  </div>
  <div className='md:w-1/2 w-full p-4 flex flex-col space-y-6 my-auto'>
    <div className='flex flex-row'> 
    <h1 className='font-bold text-3xl mb-2'>Effortless Perfection Every Single Time
      
      </h1>
    <span> <Image src={'/images/19.png'} height={100} width={100} alt='image' /></span></div>
      
        
       <p className='font-sm text-sm text-gray-700'>As the sun beats down on the bustling city streets, there is one oasis that offers a welcome respite - the charming Frozen Delight ice cream shop. Nestled on the corner of Main and Maple, this beloved local institution has been serving up scoops of joy for over three decades.

Step through the welcoming doors, and you are instantly .</p>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
        <Image src={'/images/ball1.png'} height={50} width={50} alt='image'/>
          <h1 className='font-bold'>All the best</h1>
          <p className='text-xs'>As the sun beats down on the bustling city streets, 
            there is one oasis that offers a welcome respite - the charming Frozen Delight ice cream shop.</p>
        </div>
        <div className='flex flex-col'>
        <Image src={'/images/ball3.png'} height={50} width={50} alt='image'/>
          <h1 className='font-bold'>All the best</h1>
          <p className='text-xs'>As the sun beats down on the bustling city streets, 
            there is one oasis that offers a welcome respite - the charming Frozen Delight ice cream shop.</p>
        </div>
      </div>
  </div>
     
    </div>
  )
}

export default About
