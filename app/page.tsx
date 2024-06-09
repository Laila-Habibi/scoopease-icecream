'use client'
import Image from "next/image";
import Head from "./components/Head";

import About from "./components/About";
import IceCreamCard from "./components/IceCreamCard";
import Falvours from "./components/Falvours";
import iceCreamData from "./components/IceCreamData";
import Testimonials from "./components/Testimonials";
import { iceCreamReviews } from "./components/Review";



const Home:React.FC = () => {
 

  return (
   
    <div className="flex flex-col sm:mx-16 mx-2 py-4 ">
       <Head/>
       <About/>
       <Falvours iceCreamData={iceCreamData}/>
       <Testimonials iceCreamReviews={iceCreamReviews}/>
      
          
    </div>
       
  );
}
export default Home