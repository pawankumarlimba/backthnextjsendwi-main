import Link from "next/link"


function Header() {
  return (
   <div className="flex flex-row ml-[3vw]">
    <h1 className=" text-xl ">Aakariti-Rachna</h1>
    <div className="justify-center items-center flex ml-4">
      <Link href={"/singup"}>
        <h1 className="ml-20  sm:ml-80 lg:ml-100 md:ml-100 text-center">Order</h1></Link>
        <Link href={"/login"}> <h1 className="ml-4">Logout</h1></Link>
         <Link href={"/about"}><h1 className="ml-4 ">About</h1></Link>
    </div>
    

   </div>
  )
}

export default Header