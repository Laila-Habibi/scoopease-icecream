import Head from "./components/Head";

import About from "./components/About";
import Falvours from "./components/Falvours";
import iceCreamData from "./components/IceCreamData";
import Testimonials from "./components/Testimonials";
import { iceCreamReviews } from "./components/Review";



const Home:React.FC = () => {
 

  return (
   
    <main>
       <Head/>
       <About/>
       <Falvours iceCreamData={iceCreamData}/>
       <Testimonials iceCreamReviews={iceCreamReviews}/>
      
          
    </main>
       
  );
}
export default Home
