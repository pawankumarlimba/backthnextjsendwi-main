'use client';

import Navbar3 from '@/components/Navbar3';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Webinar {
  _id: string;
  name: string;
  price: string;
  description: string;
  url: string;
}

const Page = () => {
  const [filteredCard, setFilteredCard] = useState<Webinar[]>([]);
  const [allArts, setAllArts] = useState<Webinar[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem("isLoggedIn");
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return false;
  });

  const handleChangeState = (newValue: boolean) => {
    setIsLoggedIn(newValue);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      if (storedIsLoggedIn) {
        setIsLoggedIn(JSON.parse(storedIsLoggedIn));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idd = urlParams.get('_id');
    const fetchData = async () => {
      try {
        const response = await axios.post<{ designs: Webinar[] }>('/api/design/all');
        const designs = response.data.designs;
        setAllArts(designs);
        const filtered = designs.filter(card => card._id === idd);
        setFilteredCard(filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white">
        <Navbar3 isLoggedIn={isLoggedIn} handleChangeState={handleChangeState} />
      </div>
      {filteredCard.map((webinar, index) => (
        <div key={index} className="min-h-screen grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3">
          <div className="lg:col-span-1 sm:col-span-2 flex justify-center mt-10 ml-4 mr-4 sm:mt-10">
            <img
              className="sm:h-[40vh] sm:w-auto md:h-[30vh] lg:h-[70vh] lg:w-[25vw] border-4 border-rgb(54,88,94) rounded-[10%] overflow-hidden"
              src={webinar.url}
              alt={webinar.name}
            />
          </div>
          <div className="sm:col-span-3 lg:col-span-2 mt-6 sm:mt-10">
            <h1 className="text-black text-2xl sm:text-3xl mb-4 ml-4 sm:mb-8">{webinar.name}</h1>
            <p className="text-black text-1xl sm:text-1.5xl ml-4">{webinar.description}</p>
            <p className="mt-4 ml-4 mb-4">Details</p>
            <p className="sm:mt-10 ml-4" style={{ color: '#36635a' }}>SPECIAL PRICE</p>
            <h1 className="text-.7xl sm:text-1.7xl ml-3 mt-4 sm:mt-4 sm:ml-8">{"\u20B9"} {webinar.price}</h1>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="rounded-full pl-4 pr-4 py-1 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-10 text-black flex items-center ml-[15vw] mt-[4vh] text-xs font-bold"
                  style={{ backgroundColor: '#eeb25c' }}
                >
                  <span>Buy now</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Fill Your Address</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4 justify-center sm:max-w-[70vw]">
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
                        placeholder='Enter Your Mobile Number'
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="address1"
                        name="address1"
                        className="border border-black mb-4 sm:min-w-[400px]"
                        placeholder='Address Line 1'
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="address2"
                        name="address2"
                        className="border border-black mb-4 sm:min-w-[400px]"
                        placeholder='Address Line 2'
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        className="border border-black mb-4 sm:min-w-[400px]"
                        placeholder='Enter Your Pincode'
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="tahsil"
                        name="tahsil"
                        className="border border-black mb-4 sm:min-w-[400px]"
                        placeholder='Enter Your Tahsil Name'
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="district"
                        name="district"
                        className="border border-black mb-4 sm:min-w-[400px]"
                        placeholder='Enter Your District Name'
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        id="state"
                        name="state"
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
                      <DialogHeader>
                        <DialogTitle>Payment</DialogTitle>
                        <DialogDescription>Payment option</DialogDescription>
                      </DialogHeader>
                      <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cod" id="r1" />
                          <Label htmlFor="r1">COD</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="upi" id="r2" />
                          <Label htmlFor="r2">UPI</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="wallets" id="r3" />
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
