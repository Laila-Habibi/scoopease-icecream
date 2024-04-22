'use client'
import Image from "next/image";
import Head from "./components/Head";
import CircularImageWithBorderText from "./components/circularText";
import About from "./components/About";
export default function Home({}) {
  return (
   
    <div className="flex flex-col  mx-16 py-4 ">
        <Head/>
        <About/>
        
       
    </div>
       
         

   
  );
}
