'use client'

import Navbar3 from '@/components/Navbar3';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image';






interface Webinar {
    _id: string;
    name:string,
    price: string;
    description: string;
    url: string;
  }

interface ourartsProps {
  handleChangeState: (newValue: boolean) => void;
}
const Page: React.FC<ourartsProps> = ({ handleChangeState }) => {
    const [_lang, setLang] = useState<string | null>(null);
    const [filteredCard, setFilteredCard] = useState<Webinar[]>([]);
    const [Allarts, setAllarts] = useState<  Webinar[]>([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const idd = urlParams.get('_id');
        console.log(idd)
       
        const fetchData = async () => {
            try {
              const response = await axios.post<{ designs: Webinar[] }>('/api/design/all');
              const designs = response.data.designs;
              setAllarts(designs);
              const filtered = designs.filter(card => card._id === idd);
              setFilteredCard(filtered);
              console.log(filtered);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
        
        console.log("qwe",Allarts)

    }, []);
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
    return (
        <>
            <div className="bg-white ">
                <Navbar3  isLoggedIn={isLoggedIn} handleChangeState={handleChangeState} />
            </div>
            {filteredCard.map((webinar, index) => (
                <div key={index} className="min-h-screen  grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3   ">
                    <div className="lg:col-span-1  sm:col-span-2  flex justify-center mt-10 ml-4 mr-4 sm:mt-10">
                        <img className=" sm:h-[40vh] sm:w-auto md:h-[30vh] lg:h-[70vh] lg:w-[25vw] border-4 border-rgb(54,88,94) rounded-[10%] overflow-hidden" src={webinar.url} alt="" />
                    </div>
                    <div className=" sm:col-span-3 lg:col-span-2 mt-6 sm:mt-10">
                        <h1 className="text-black text-2xl sm:text-3xl mb-4 ml-4 sm:mb-8">{webinar.name}</h1>
                        <p className="text-black text-1xl sm:text-1.5xl ml-4">{webinar.description}</p>
                        <p className="mt-4 ml-4 mb-4 "> details </p>
                        <p className="sm:mt-10 ml-4 " style={{ color: '#36635a' }}>SPECIAL PRICE </p>
                        <h1 className="text-.7xl sm:text-1.7xl ml-3 mt-4 sm:mt-4 sm:ml-8"> {"\u20B9"} {webinar.price}</h1>


                        <Dialog>
                        <DialogTrigger asChild>
                            <button className="  rounded-full pl-4 pr-4 py-1 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-10 text-black flex items-center ml-[15vw] mt-[4vh] text-xs font-bold " style={{ backgroundColor: '#eeb25c' }}>
                                <span>Buy now</span>
                            </button>
                             </DialogTrigger>
                           
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Fill Your Address</DialogTitle>
          
        </DialogHeader>
        <div className="grid  gap-4 py-4 justify-center sm:max-w-[70vw] ">
        <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
      
              <input
                type="email"
                id="email"
                name="email"
               
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Enter Your Email'
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="number"
                name="number"
             
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Enter Your Mobail Number'
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Address line 1'
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Address Line 2'
                className="border border-black mb-4 sm:min-w-[400px]"
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Enter Your Pincode'
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Enter your Tahsil Name'
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Enter your Districk Name'
              />
        
      </div>
      <div className="flex items-center space-x-2">
      
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-black mb-4 sm:min-w-[400px]"
                placeholder='Enter Your State Name'
              />
        
      </div>
      
      
    </RadioGroup>
        </div>
        <DialogFooter>
        <Dialog>
      <DialogTrigger asChild>
          <Button type="submit">Next</Button>
          </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <RadioGroup defaultValue="comfortable">
      
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
          <DialogDescription>
           Payment option
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
        <RadioGroupItem value="compac" id="r1" />
        <Label htmlFor="r1">COD</Label>
      </div>
      
        <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">UPI</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Wallets</Label>
      </div>
      </RadioGroup>
        <DialogFooter>
          <Button type="submit">Pay Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </DialogFooter>
      </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Page;
