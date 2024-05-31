"use client";


import Footer from "./Footer";
import Herosection2 from "./Herosection2";

import Herosection from "./herosection";
import Navbar2 from "./ui/Navbar2";

function Homepage() {
    
  return (
    
    <>
    <div className="bg-black/[0.9]">
    <div  className="text-amber-700 ">
      
  <div className="">
    <div className="block sm:hidden left-0">
      <Navbar2/>
    </div>  </div></div>
    
    
    <Herosection/>
    <Herosection2/>
    <Footer/>
    
    </div>
    </>
  )
}

export default Homepage