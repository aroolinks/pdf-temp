import Image from 'next/image';
import leftImage from '../src/assets/img01.jpg';
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';

const SectionTwo = () => {
  const list = [
    'Mix and match data plans with Unlimited or By the Gig options',
    'Most reliable mobile service coast to coast',
    'Unlimited nationwide talk and text',
    'No contracts,added texes or hidden fees',
  ];
  return (
    <div className='xl:w-screen w-auto xl:h-screen md:flex flex-col md:flex-row md:p-20 gap-10'>
      {/* --------- Left Side ------- */}
      <div className='md:w-1/2 w-auto md:py-0 py-8 flex justify-center items-center '>
        <div className='uppercase flex w-full h-full flex-col justify-center font-bold text-white items-center '>
          {/* <h1 className='xl:text-4xl text-2xl  '>SWITCH AND</h1>
            <h1 className='xl:text-8xl text-6xl tracking-tighter   flex gap-5'>SAVE <div className='flex flex-col text-2xl leading-6 justify-center'><span>up</span> <span>to</span></div></h1>
            <h1 className='xl:text-9xl text-7xl tracking-tighter leading-[85px] flex' >60% <div className=' flex  '><span className='text-[50px] '>^^</span></div> </h1>
            <h1 className='xl:text-4xl text-2xl pt-4'>on your</h1>
            <h1 className='xl:text-4xl text-2xl'>wireless bill</h1> */}
          <Image src={leftImage} width={500} height={500} alt='img' />
        </div>
      </div>
      {/* ----  Right Side ---- */}
      <div className='md:w-1/2 xl:p-16 md:p-0 p-20  '>
        <div>
          <h1 className='tracking-wider lg:text-2xl md:text-2xl font-sans  text-blue-500'>
            SPECTRUM MOBILE
          </h1>
          <h1 className=' lg:text-5xl md:text-2xl pt-2 font-light'>
            A Better Way to Mobile Is Here{' '}
          </h1>
          <div className='flex flex-col justify-center tracking-tighter gap-2 text-gray-500'>
            <h1 class='flex items-cente space-x-2 pt-5 font-light '>
              <span class='text-blue-500 text-2xl'>•</span>
              <span className=' lg:text-[1.2rem] leading-8 lg:leading-10'>
                Mix and match data plans with Unlimited or By the Gig options
              </span>
            </h1>
            <h1 class='flex items-cente space-x-2 font-light '>
              <span class='text-blue-500 text-2xl'>•</span>
              <span className=' lg:text-[1.2rem] leading-8 lg:leading-10'>
                Most reliable mobile service coast to coast
              </span>
            </h1>
            <h1 class='flex items-cente space-x-2  font-light '>
              <span class='text-blue-500 text-2xl'>•</span>
              <span className=' lg:text-[1.2rem] leading-8 lg:leading-10'>
                Unlimited nationwide talk and text
              </span>
            </h1>
            <h1 class='flex items-cente space-x-2  font-light '>
              <span class='text-blue-500 text-3xl'>•</span>
              <span className=' lg:text-[1.2rem] leading-8 lg:leading-10'>
                No contracts,added texes or hidden fees
              </span>
            </h1>
            {/* contact number */}
          </div>
          <div className='xl:text-4xl lg:text-3xl font-semibold flex gap-5 pt-14'>
            <span>
              <IoCallOutline />
            </span>
            <h1>1-888-123-4567</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
