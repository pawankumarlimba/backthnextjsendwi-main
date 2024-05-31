'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
import Link from 'next/link';

interface Webinar {
  _id: string;
  name: string;
  price: string;
  description: string;
  url: string;
}

function Herosection2() {
  const [Allarts, setAllarts] = useState<Webinar[]>([]);
  const [count, setcount] = useState<number>(0);

  const incrementCount = () => {
    if (count < Allarts.length - 4) {
      setcount(count + 1);
    } else {
      setcount(0);
    }
  };
  const decrementCount = () => {
    if (count == 0) {
      setcount(Allarts.length - 4);
    } else {
      setcount(count - 1);
    }
  };
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

  console.log(count);
  console.log('hey', Allarts[0]);
  if (Allarts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='min-h-[160vh] sm:min-h-screen lg:min-h-[110vh] min-w-screen   bg-black  relative'>
        <Button
          onClick={incrementCount}
          className='z-50 absolute sm:top-[45vh] lg:top-[65vh] lg:right-[2vw] sm:right-[1vw] hidden sm:flex flex-grow'
          variant='outline'
          size='icon'
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
        <Button
          onClick={decrementCount}
          className='z-50 absolute lg:top-[65vh] sm:top-[45vh]    lg:left-[2vw] sm:left-[1vw] transform rotate-180 hidden sm:flex flex-grow'
          variant='outline'
          size='icon'
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
        <div className='absolute grid grid-cols-1 sm:grid-cols-3 gap-3 top-[10vh] left-[9vw] sm:top-[35vh] lg:bottom-[5vh] sm:left-[6vw] flex justify-center items-center'>
          <div className='flex justify-center '>
            <Link
              href={{
                pathname: '/orderpage',
                query: { _id: Allarts[count]._id },
              }}
            >
              <BackgroundGradient className='rounded-[22px] w-[80vw] sm:w-[25vw] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <div>
                  <h2 className='text-xl font-bold mb-1 truncate w-[150px]'>
                    {Allarts[count].name}
                  </h2>
                  <Image
                    src={`${Allarts[count].url}`}
                    alt='jordans'
                    height='400'
                    width='400'
                    className='object-contain'
                  />
                  <p className='text-gray-600 truncate w-[150px]'>
                    {Allarts[count].description}
                  </p>
                  <p className='text-gray-600 truncate w-[150px]'>
                    {'\u20B9'} {Allarts[count].price}
                  </p>
                </div>
              </BackgroundGradient>
            </Link>
          </div>
        </div>
        <div className='absolute grid grid-cols-1 sm:grid-cols-3 gap-3 top-[60vh] left-[9vw] sm:top-[35vh] lg:bottom-[5vh] sm:left-[40vw] flex justify-center items-center'>
          <div className='flex justify-center '>
            <Link
              href={{
                pathname: '/orderpage',
                query: { _id: Allarts[count + 1]._id },
              }}
            >
              <BackgroundGradient className='rounded-[22px] w-[80vw] sm:w-[25vw] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <div>
                  <h2 className='text-xl font-bold mb-1 truncate w-[150px]'>
                    {Allarts[count + 1].name}
                  </h2>
                  <Image
                    src={`${Allarts[count + 1].url}`}
                    alt='jordans'
                    height='400'
                    width='400'
                    className='object-contain'
                  />
                  <p className='text-gray-600 truncate w-[150px]'>
                    {Allarts[count + 1].description}
                  </p>
                  <p className='text-gray-600 truncate w-[150px]'>
                    {'\u20B9'} {Allarts[count + 1].price}
                  </p>
                </div>
              </BackgroundGradient>
            </Link>
          </div>
        </div>
        <div className='absolute grid grid-cols-1 sm:grid-cols-3 gap-3 top-[110vh] left-[9vw]  sm:top-[35vh] left-[15vw] lg:bottom-[5vh] sm:left-[77vw] flex justify-center items-center'>
          <div className='flex justify-center '>
            <Link
              href={{
                pathname: '/orderpage',
                query: { _id: Allarts[count + 2]._id },
              }}
            >
              <BackgroundGradient className='rounded-[22px] w-[80vw] sm:w-[25vw] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <div>
                  <h2 className='text-xl font-bold mb-1 truncate w-[150px]'>
                    {Allarts[count + 2].name}
                  </h2>
                  <Image
                    src={`${Allarts[count + 2].url}`}
                    alt='jordans'
                    height='400'
                    width='400'
                    className='object-contain'
                  />
                  <p className='text-gray-600 truncate w-[150px]'>
                    {Allarts[count + 2].description}
                  </p>
                  <p className='text-gray-600 truncate w-[150px]'>
                    {'\u20B9'} {Allarts[count + 2].price}
                  </p>
                </div>
              </BackgroundGradient>
            </Link>
          </div>
        </div>
        <div className='absolute top-4 lift-0'>
          <img
            className='h-[10vh] sm:h-[30vh] lg:h-[40vh]  transform rotate-180'
            src='/uploads/logo1.png'
            alt=''
          />
        </div>
        <div className='absolute top-4 right-0'>
          <img
            className='h-[10vh] sm:h-[30vh] lg:h-[40vh]  transform rotate-180'
            src='/uploads/logo2.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default Herosection2;
