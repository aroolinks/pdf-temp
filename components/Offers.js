import React from 'react';
import { TiTick } from 'react-icons/ti';
import { IoCallOutline } from 'react-icons/io5';

const Offers = () => {
  const Contant = [
    'More bandwidth for streaming videos and online gaming on more MediaDevices',
    'No data caps on more devices',
    'Free Internet modren and internet security software',
    'combine with spertrum TV,Voice and Mobile services',
  ];
  return (
    <div className='xl:w-screen xl:h-screen md:flex flex-row '>
      <div className='md:w-[55%] h-full bg-gradient-to-r from-gray-900 to-blue-500 text-white'>
        <div className='px-14 py-6 gap-24'>
          <h1 className='uppercase xl:text-1xl md:text-[1rem] tracking-widest'>
            internet for your home
          </h1>
          <h1 className='xl:text-6xl md:text-2xl lg:text-4xl xl:leading-[70px]'>
            Spectrum Offers the Speed You Need for All Your Devices*
          </h1>
          <div className='flex flex-col justify-center xl:py-5'>
            {Contant.map((item, index) => (
              <span
                key={index}
                className='lg:text-[1.6rem] flex gap-5 pt-4 tracking-tighter'
              >
                <span className='text-blue-400  text-4xl'>
                  <TiTick />
                </span>
                {item}
              </span>
            ))}
          </div>
          {/* Contact Number */}
          <div className='lg:text-4xl font-semibold flex gap-5 pt-10'>
            <span>
              <IoCallOutline />
            </span>
            <h1>1-888-123-4567</h1>
          </div>
          <div className='lg:text-sm text-[10px] px-2 py-8'>
            <h1>
              *Based on the latest FCC Broadband Report.Spectrum Internet
              Required.Auto-pay required.
            </h1>
            <h1>Service not available in all areas.Restrictions apply. </h1>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className='md:w-[45%] w- xl:h-full bg-gradient-to-r from-cyan-500 to-blue-500 text-[#6B84EE]'>
        <div className='md:w-2/3 h-full bg-gray-100 text-center '>
          <div className='p-8 text-center'>
            <h1 className='text-[2rem] text-center'>From</h1>
            <div className='flex text-center justify-center  '>
              <h1 className='text-7xl font-bold xl:text-[9rem]  2xl:text-[12rem] text-center '>
                {' '}
                <span className=' md:text-2xl xl:text-6xl text-2xl  font-bold align-top '>
                  $
                </span>
                49
              </h1>
              <div className='flex flex-col gap-2 text-center'>
                <h1 className='md:text-2xl xl:text-3xl font-semibold leading-2 '>
                  <span className='md:text-3xl xl:text-5xl'>99</span>/mo
                </h1>
                <span className='xl:text-[20px] md:text-[15px] font-semibold leading-[2px] md:leading-3 '>
                  for 12 mos*
                </span>
              </div>
            </div>
            <div className='flex items-center w-full h-auto justify-center py-2'>
              <h1 className='border-y-2 text-3xl font-semibold '>
                NO CONTRACTS
              </h1>
            </div>
          </div>

          <img
            className=''
            src='https://gumlet-blog-content.gumlet.io/learn/content/images/2021/10/responsive.png?w=750&q=80'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
