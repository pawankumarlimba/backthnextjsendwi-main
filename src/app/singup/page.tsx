"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar3 from "@/components/Navbar3";

interface singupProps {
  isLoggedIn: boolean;
  handleChangeState: (newValue: boolean) => void;
  
}

const page: React.FC<singupProps> = ({ handleChangeState }) => {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
 
  const [username,setusername]=useState('');

  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : true;
  });
   handleChangeState = (newValue: boolean) => {
    setIsLoggedIn(newValue);
  };
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      handleChangeState(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  
  
   const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response=await axios.post('/api/user/register',{
        username,
        email,
        password})
        console.log(response);
        if(response.data.success){
          localStorage.setItem("isLoggedIn", "true");
          handleChangeState(true);

toast.success("user signin succesfully");
window.location.replace('/');

        }
        else{
          toast.error("account not found")
        }
    } catch (error) {
      toast.error("somthing is wrong")
      console.log(error)
    }
    

  };
  return (
    <>
    <Navbar3 isLoggedIn={isLoggedIn} handleChangeState={handleChangeState}/>
    <div className="flex justify-center items-center bg-white h-[100vh] w-[100vw] sm:h-[100vh] sm:w-[100vw]  md:h-[100vh] md:w-[100vw]  lg:h-[100vh] lg:w-[100vw] overflow-hidden mx-auto  ">
 <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
 <div className="flex flex-row relative ">
      
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <Link href={"/"}>
      <button className="absolute top-0 right-0 text-xl rounded-[50%] pr-2 pl-2 pb-1  ">x</button></Link>
      </div>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>
 
      <form className="my-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" 
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email"
          value={email}
          onChange={(e)=>{setemail(e.target.value)}} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" 
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          
          />
        </LabelInputContainer>
        
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          sign up  &rarr;
          <BottomGradient />
        </button>
 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
 
        <div className="flex flex-col space-y-4">
            <Link href={"/login"}>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Already have an account 
            </span>
            <BottomGradient />
          </button></Link>
          
        </div>
      </form>
    </div>
    </div></>
  );
}
 
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default page