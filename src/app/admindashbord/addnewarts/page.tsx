"use client"
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Page() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(1);
  const [url, setUrl] = useState<File | null>(null);
  const [category, setCategory] = useState<string>('12356nn');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const bodyFormData = new FormData();
      bodyFormData.append('name', name);
      bodyFormData.append('description', description);
      bodyFormData.append('price', price.toString());
      bodyFormData.append('category', category);
      if (url) {
        bodyFormData.append('image', url);
      }

      const response = await axios.post('/api/design/add', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success('Art added successfully');
        window.location.replace('/admindashbord/adminhome');
      } else {
        toast.error('Art not added');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen min-w-screen bg-white'>
      <div className='h-[60vh] sm:h-[80vh] sm:w-[50vw] flex flex-col justify-center items-center rounded-10xl shadow-xl'>
        <form onSubmit={handleSubmit} className='w-full max-w-md'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name' className='mb-2'>
              Title:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border border-black rounded-lg py-2 px-3'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='description' className='mb-2'>
              Description:
            </label>
            <textarea
              id='description'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='border border-black rounded-lg py-2 px-3 min-h-[20vh]'
            ></textarea>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='price' className='mb-2'>
              Price:
            </label>
            <input
              type='number'
              id='price'
              name='price'
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className='border border-black rounded-lg py-2 px-3'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='picture' className='mb-2'>
              Picture:
            </label>
            <input
              type='file'
              id='picture'
              name='picture'
              onChange={(e) => setUrl(e.target.files?.[0] || null)}
              className='border border-black rounded-lg py-2 px-3'
            />
          </div>
          <div className='flex justify-center'>
            <button
              className='border border-black rounded-lg py-2 px-4 bg-gray-200 hover:bg-gray-300'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
