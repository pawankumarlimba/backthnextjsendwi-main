"use client";

import Navbar3 from "@/components/Navbar3";
import Link from "next/link";




function Orderpage1() {
   
const hovercard = [
  { id:"1",
    title: "49",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/uploads/member-2.jpg",
  },
  {
    id:"2",
    title: "49",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/uploads/member-2.jpg",
  },
  {
    id:"3",
    title: "49",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/uploads/member-2.jpg",
  },
  {
    id:"4",
    title: "49",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/uploads/member-2.jpg",
  },
  {
    id:"5",
    title: "49",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "/uploads/member-2.jpg",
  },
  {
    id:"6",
    title: "49",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "/uploads/member-2.jpg",
  },
];
  return (
    
    <>
    <div  className="bg-white ">
    <Navbar3 />
    </div>
    {hovercard.map((webinar,index)=>(

    
       <>
    
    
    <div key={index} className="min-h-screen  grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3   ">
      <div className="lg:col-span-1  sm:col-span-2  flex justify-center mt-10 ml-4 mr-4 sm:mt-10">
        <img className=" sm:h-[40vh] sm:w-auto md:h-[30vh] lg:h-[70vh] lg:w-[25vw] border-4 border-rgb(54,88,94) rounded-[10%] overflow-hidden" src={webinar.link} alt="" />
      </div>
      <div className=" sm:col-span-3 lg:col-span-2 mt-6 sm:mt-10">
        <h1 className="text-black text-2xl sm:text-3xl mb-4 ml-4 sm:mb-8">Name of the product</h1>
        <p className="text-black text-1xl sm:text-1.5xl ml-4">{webinar.description}</p>
        <p className="mt-4 ml-4 mb-4 "> details </p>
        <p className="sm:mt-10 ml-4 " style={{  color: '#36635a' }}>SPECIAL PRICE </p>
        <h1 className="text-.7xl sm:text-1.7xl ml-3 mt-4 sm:mt-4 sm:ml-8">  {"\u20B9"} {webinar.title}</h1>
        <Link href={"/paymentpage"} >
        <button className="  rounded-full pl-4 pr-4 py-1 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-10 text-black flex items-center ml-[15vw] mt-[4vh] text-xs font-bold " style={{ backgroundColor: '#eeb25c' }}>
          <span>Buy now</span>
        </button></Link>
      </div>
    </div>
    </>
    ))} 
    </>
  )
}

export default Orderpage1
