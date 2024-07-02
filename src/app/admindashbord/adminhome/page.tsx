// page.tsx
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

const products = [
  {
    title: 'All Users',
    link: '/admindashboard/users',
    thumbnail: '/uploads/allusers.jpg',
  },
  {
    title: 'Add new Admin',
    link: '/admindashboard/signup',
    thumbnail: '/uploads/1.png',
  },
  {
    title: 'Add New Arts',
    link: '/admindashboard/addnewarts',
    thumbnail: '/uploads/3.png',
  },
  {
    title: 'Delete User Account',
    link: '/uploads/4.png',
    thumbnail: '/uploads/4.png',
  },
  {
    title: 'Add New Team Member',
    link: 'https://renderwork.studio',
    thumbnail: '/uploads/2.png',
  },
  {
    title: 'Delete User Art',
    link: '/admindashboard/deletearts',
    thumbnail: '/uploads/5.png',
  },
  {
    title: 'Remove Team Member',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/uploads/6.png',
  },
];

function Page() {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/admin/logout');
      
      if (response.data.success === true) {
        toast.success('User logged out successfully');
        console.log(response);
        window.location.replace('/admindashboard'); // Redirect to admin dashboard
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Internal server error');
      console.log(error);
    }
  };

  return (
    <>
      <div className='bg-white min-h-screen min-w-screen'>
        <div className='p-2 bg-white'>
          <Button onClick={handleLogout} className='float-right m-4'>
            Logout
          </Button>
        </div>

        <div className='hidden sm:flex flex-grow'>
          <HeroParallax products={products} />
        </div>

        <div className='block sm:hidden'>
          <div className='min-h-screen pt-15'>
            <h1 className='text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-vlack pt-6'>
              Admin Dashboard
            </h1>
            <h2 className='text-center text-teal-600 font-semibold tracking-wide uppercase'>
              Manage like a boss with your personal special Dashboard
            </h2>

            <div className='mt-6 flex justify-center'>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  Admin Logout
                </p>

                <Image
                  src={'/uploads/6.png'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <button
                  onClick={handleLogout}
                  className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'
                >
                  <span>Click here</span>
                </button>
              </BackgroundGradient>
            </div>

            {products.map((product, index) => (
              <div key={index} className='mt-6 flex justify-center'>
                <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                  <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                    {product.title}
                  </p>

                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    height='400'
                    width='400'
                    className='object-contain'
                  />
                  <Link href={product.link}>
                    <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                      <span>Click here</span>
                    </button>
                  </Link>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
