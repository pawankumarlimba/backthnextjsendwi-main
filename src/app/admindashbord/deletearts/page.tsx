'use client';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Webinar {
  _id: string;
  name: string;
  price: string;
  description: string;
  url: string;
}

function Page() {
  const [Allarts, setAllarts] = useState<Webinar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<{ designs: Webinar[] }>(
          '/api/design/all'
        );
        setAllarts(response.data.designs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  async function handleartremove(id: string) {
    try {
      const response = await axios.post('/api/design/remove', {
        id,
      });
      console.log(response);
      if (response.data.success === true) {
        toast.success('user logout succesfully');
        console.log(response);
        window.location.reload();
      } else {
        toast.error('something is wrong');
      }
    } catch (error) {
      toast.error('internal error ');
      console.log(error);
    }

    // Redirect to the home page after logout
  }

  return (
    <div className='bg-white min-h-screen min-w-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 py-10'>
        {Allarts.map((user, index) => (
          <div className='flex justify-center' key={index}>
            <BackgroundGradient className='rounded-[22px] w-[80vw] sm:w-[25vw] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
              <div>
                <h2 className='text-xl font-bold mb-1 truncate w-[150px]'>
                  {user.name}
                </h2>
                <Image
                  src={`${user.url}`}
                  alt='jordans'
                  height='400'
                  width='400'
                  className='object-contain'
                />
                <p className='text-gray-600 truncate w-[150px]'>
                  {user.description}
                </p>
                <p className='text-gray-600 truncate w-[150px]'>{user.price}</p>
              </div>
              <button
                onClick={() => handleartremove(user._id)}
                className='rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'
              >
                <span>Remove Art</span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
