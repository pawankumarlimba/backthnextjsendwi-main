'use client';

import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Page() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(1);
  const [url, setUrl] = useState<File | null>(null);
  const [category, setCategory] = useState<string>('12356nn');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      var bodyFormData = new FormData();
      bodyFormData.append('name', name);
      bodyFormData.append('description', description);
      bodyFormData.append('price', price.toString());
      bodyFormData.append('category', category);
      bodyFormData.append('image', url);
      const response = await axios.post(
        '/api/design/add',
        bodyFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
        // name,
        // description,
        // price,
        // url,
        // category,
      );
      console.log(response);
      if (response.data.success) {
        toast.success('Art added successfully');
        window.location.replace('/admindashbord/adminhome');
      } else {
        toast.error('Art not added');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center  min-h-screen min-w-screen bg-white'>
        <div className='h-[60vh] sm:h-[80vh] sm:w-[50vw] flex flex-col justify-center items-center  rounded-10xl shadow-xl'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor='name'>Title:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border border-black mb-4'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='description'>Description:</label>
              <textarea
                id='description'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='border border-black  min-h-[20vh] sm:min-w-[40vw] mb-4'
              ></textarea>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='price'>Price:</label>
              <input
                type='number'
                id='price'
                name='price'
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                className='border border-black mb-4 '
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='picture'>Picture:</label>
              <input
                type='file'
                id='picture'
                name='picture'
                onChange={(e) => setUrl(e.target.files[0])}
                className='border border-black   sm:min-w-[40vw] mb-6'
              />
            </div>
            <div className='flex justify-center'>
              <button
                className='border border-black pt-1 pb-1 pl-3 pr-3 rounded-lg shadow-lg'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
