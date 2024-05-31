'use client';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Button } from '@/components/ui/button';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { IconAppWindow } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

function page() {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/admin/logout');

      if (response.data.success === true) {
        toast.success('user logout succesfully');
        console.log(response);
        window.location.replace('/admindashbord');
      } else {
        toast.error('something is wrong');
      }
    } catch (error) {
      toast.error('internal error ');
      console.log(error);
    }

    // Redirect to the home page after logout
  };
  return (
    <>
      <div className='bg-white min-h-screen min-w-screen '>
        <div className='p-2 bg-white'>
          <Button onClick={handleLogout} className='float-right m-4'>
            Logout
          </Button>
        </div>
        <div className='hidden sm:flex flex-grow'>
          <HeroParallax products={products} />
        </div>
        <div className='block sm:hidden'>
          <div className='min-h-screen  pt-15 '>
            <h1 className='text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-vlack pt-6'>
              {' '}
              Admin Dashbord
            </h1>

            <h2 className='text-center text-teal-600 font-semibold tracking-wide uppercase'>
              manage like a boss with your personal special Dashbord
            </h2>

            <div className='mt-6 flex justify-center '>
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
                  <span>click here</span>
                </button>
              </BackgroundGradient>
            </div>
            <div className='mt-6 flex justify-center '>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  All Users
                </p>

                <Image
                  src={'/uploads/allusers.jpg'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <Link href={'/admindashbord/users'}>
                  <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                    <span>click here</span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>

            <div className='mt-6 flex justify-center '>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  Add new Admin
                </p>

                <Image
                  src={'/uploads/1.png'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <Link href={'/admindashbord/signup'}>
                  <button className='rounded-full pl-4 pr-1 py-1 text-white text-center flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                    <span>click here</span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
            <div className='mt-6 flex justify-center '>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  Add New Arts
                </p>

                <Image
                  src={'/uploads/3.png'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <Link href={'/admindashbord/addnewarts'}>
                  <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                    <span>click here</span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
            <div className='mt-6 flex justify-center '>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  Delete User Acount
                </p>

                <Image
                  src={'/uploads/4.png'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                  <span>click here</span>
                </button>
              </BackgroundGradient>
            </div>
            <div className='mt-6 flex justify-center '>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  Add New team Member
                </p>

                <Image
                  src={'/uploads/2.png'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                  <span>click here</span>
                </button>
              </BackgroundGradient>
            </div>
            <div className='mt-6 flex justify-center '>
              <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <p className='text-base text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold'>
                  Delete User Art
                </p>

                <Image
                  src={'/uploads/5.png'}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <Link href={'/admindashbord/deletearts'}>
                  <button className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                    <span>click here</span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

export const products = [
  {
    title: 'All Users',
    link: '/admindashbord/users',
    thumbnail: '/uploads/allusers.jpg',
  },

  {
    title: 'Add new Admin',
    link: '/admindashbord/signup',
    thumbnail: '/uploads/1.png',
  },
  {
    title: 'Add New Arts',
    link: '/admindashbord/addnewarts',
    thumbnail: '/uploads/3.png',
  },
  {
    title: 'Delete User Acount',
    link: '/uploads/4.png',
    thumbnail: '/uploads/4.png',
  },
  {
    title: 'Add New team Member ',
    link: 'https://renderwork.studio',
    thumbnail: '/uploads/2.png',
  },

  {
    title: 'Delete User Art',
    link: '/admindashbord/deletearts',
    thumbnail: '/uploads/5.png',
  },
  {
    title: 'Remove Team Member',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/uploads/6.png',
  },
];
