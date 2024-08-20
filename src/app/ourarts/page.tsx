
'use client';

import Navbar3 from "@/components/Navbar3";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { useEffect, useState } from "react";

interface Webinar {
  _id: string;
  name: string;
  price: string;
  description: string;
  url: string;
}

function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : true;
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
      if (storedIsLoggedIn === 'true') {
        handleChangeState(true);
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<{ designs: Webinar[] }>('/api/design/all');
        setAllarts(response.data.designs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [Allarts, setAllarts] = useState<Webinar[]>([]);

  return (
    <>
      <div className="bg-white">
        <Navbar3 isLoggedIn={isLoggedIn} handleChangeState={handleChangeState} />
      </div>
      <div className="p-12 bg-white p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="mt-2 text-2xl sm:text-3xl text-blue-900 lg:sm:text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Our Arts</p>
          </div>
          <div className="mt-10">
            <HoverEffect items={Allarts.map(webinar => ({
              name: webinar.name,
              price: webinar.price,
              description: webinar.description,
              url: webinar.url,
              _id: webinar._id,
            }))} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
