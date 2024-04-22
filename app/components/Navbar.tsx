import React from 'react'
import 'animate.css';


const Navbar = () => {
  return (
    <div
    
     className='border border-solid-1 border-gray-300 shadow-md mx-16 my-4 rounded-md'>
      <div className='flex flex-row justify-between text-center px-12 py-2'>
        <div className='flex flex-row space-x-4'>
           <p className='font-bold hover:text-rose-500 hover:-translate-y-1 hover:underline
           transform transition-transform duration-300 hover:cursor-pointer
           '>Home</p>
           <p className='font-bold hover:text-rose-500 hover:-translate-y-1 hover:underline
           transform transition-transform duration-300 hover:cursor-pointer '>Shop</p>
           <p className='font-bold hover:text-rose-500 hover:-translate-y-1 hover:underline
           transform transition-transform duration-300 hover:cursor-pointer'>Flavours</p>
        </div>
        <div>
            <p className='font-bold text-xl hover:cursor-pointer hover:text-red-500 animate__animated animate__bounce'>Scoopease</p>
        </div>
        <div className='flex flex-row space-x-4'>
           <p className='font-bold hover:text-rose-500 hover:-translate-y-1 hover:underline
           transform transition-transform duration-300 hover:cursor-pointer
           '>Home</p>
           <p className='font-bold hover:text-rose-500 hover:-translate-y-1 hover:underline
           transform transition-transform duration-300 hover:cursor-pointer '>Shop</p>
           <p className='font-bold hover:text-rose-500 hover:-translate-y-1 hover:underline
           transform transition-transform duration-300 hover:cursor-pointer'>Flavours</p>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
             className="lucide lucide-search hover:text-rose-500 hover:-translate-y-1 hover:underline
             transform transition-transform duration-300 hover:cursor-pointer"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>

             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
             fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"
              stroke-linejoin="round" className="lucide lucide-shopping-cart hover:text-rose-500 hover:-translate-y-1 hover:underline
              transform transition-transform duration-300 hover:cursor-pointer"><circle cx="8" 
              cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Navbar
