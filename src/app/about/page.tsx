'use client';

import Navbar3 from "@/components/Navbar3";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";

function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem("isLoggedIn");
      return storedValue ? JSON.parse(storedValue) : true;
    }
    return true;
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
    if (typeof window !== 'undefined') {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="bg-white">
        <Navbar3 isLoggedIn={isLoggedIn} handleChangeState={handleChangeState} />
      </div>
      <div className="bg-white min-h-screen min-w-screen relative">
        <div className="pt-5">
          <h1 className="text-2xl md:text-7xl text-center font-sans font-bold">Meet Our Team</h1>
          <h1 className="text-2xl md:text-7xl text-center font-sans font-bold text-blue-900">....</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-3">
            <div className="flex justify-center">
              <div className="card w-96 bg-base-100 shadow-xl mb-6 items-center">
                <figure className="px-10 pt-10">
                  <Image src="/uploads/member-1.jpg" alt="Swati Kumari" className="rounded-xl" width={500} height={500} />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-xl">Swati Kumari</h2>
                  <h2 className="card-title text-xl">Team Leader</h2>
                  <p>B.Tech || Mechanical Engineering ||NIT Agartala</p>
                  <div className="card-actions items-center flex flex-row justify-center">
                    <Link href="https://www.linkedin.com/in/swati-kumari-355173236/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <IconBrandLinkedin className="h-8 w-8 text-neutral-800 dark:text-neutral-300 mb-3 mt-1" />
                    </Link>
                    <Link href="https://www.instagram.com/swatii_thakurr_?igsh=NTZuZmpseWpvZ244">
                      <IconBrandInstagram className="h-8 w-8 text-neutral-800 dark:text-neutral-300 mb-3 mt-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card w-96 bg-base-100 shadow-xl mb-6 items-center">
                <figure className="px-10 pt-10">
                  <Image src="/uploads/member-2.jpg" alt="Devender Singh" className="rounded-xl" width={500} height={500} />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-xl">Devender Singh</h2>
                  <h2 className="card-title text-xl">Team Member</h2>
                  <p>B.Tech|| CS Engineering || IIIT Agartala</p>
                  <div className="card-actions items-center flex flex-row justify-center">
                    <Link href="https://www.linkedin.com/in/singhdev18/">
                      <IconBrandLinkedin className="h-8 w-8 text-neutral-800 dark:text-neutral-300 mb-3 mt-1" />
                    </Link>
                    <Link href="https://www.instagram.com/devfpv7?igsh=MWxjZjN3OG82eHJwYg%3D%3D">
                      <IconBrandInstagram className="h-8 w-8 text-neutral-800 dark:text-neutral-300 mb-3 mt-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card w-96 bg-base-100 shadow-xl mb-6 items-center">
                <figure className="px-10 pt-10">
                  <Image src="/uploads/member3.jpg" alt="Aditya Raj" className="rounded-xl" width={500} height={500} />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-xl">Aditya Raj</h2>
                  <h2 className="card-title text-xl">Team Member</h2>
                  <p>B.Tech|| BioTech. Engineering ||NIT Agartala</p>
                  <div className="card-actions items-center flex flex-row justify-center">
                    <Link href="https://www.linkedin.com/in/rajsecrets/">
                      <IconBrandLinkedin className="h-8 w-8 text-neutral-800 dark:text-neutral-300 mb-3 mt-1" />
                    </Link>
                    <Link href="https://www.instagram.com/rajsecrets/">
                      <IconBrandInstagram className="h-8 w-8 text-neutral-800 dark:text-neutral-300 mb-3 mt-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
