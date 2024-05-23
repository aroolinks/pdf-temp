import React from 'react';

const Main = () => {
  return (
    <div className='w-screen bg-gradient-to-r from-cyan-500 to-blue-500 h-auto   '>
      {/* ---------- Header ----------*/}
      <div className='w-[100%] h-[16vh] bg-white justify-between items-center flex  lg:px-20 '>
        <div className='logo flex gap-5 items-center p-5 tracking-tighter'>
          <div className='font-bold sm:text-[1.7rem] md:text-[2rem] lg:text-[3rem] tracking-tighter'>
            Spectrum
          </div>
          <span className='h-[40px] w-[2px] bg-black'></span>
          <div className='flex flex-col leading-4 font-semibold '>
            <span className='md:text-[15px] text-[12px]'>AUTHORIZED</span>
            <span className='md:text-[15px] text-[12px]'>RETAILER</span>
          </div>
        </div>
        <div className='flex flex-col leading-5  sm:leading-6 items-center px-5 md:p-5 tracking-tighter md:leading-10  font-bold'>
          <span className='xl:text-[1.2rem] md:text-[1rem] text-[10px] xl:mr-44 sm:text-[1.2rem] '>
            CALL TO CLAIM THIS OFFER:
          </span>
          <span className='xl:text-[3.4rem] md:text-[1.6rem] sm:text-[1.3rem] '>
            {' '}
            1-888-123-4567{' '}
          </span>
        </div>
      </div>
      {/* ---------- Header End ----------*/}

      {/* ---------- Hero Section ----------*/}
      <div className=' flex flex-col justify-center items-center text-white'>
        <div className='p-10 flex flex-col justify-center items-center'>
          <h1 className='lg:text-6xl md:text-4xl text-3xl font-bold'>
            Spectrum <span className='font-light'>mobile</span>
          </h1>
          {/* ---------- Heading 2 ----------*/}
          <h1 className='p-10 lg:text-6xl md:text-3xl text-2xl font-bold text-center'>
            Save Up to 60%^^ on your wireless bill.
          </h1>
          {/* ---------- Offers--------- */}
          <div className='flex gap-10'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='lg:text-[1.8rem] text-[1.4rem] font-bold tracking-wide'>
                UNLIMITED
              </h1>
              <div className='flex'>
                <h1 className='lg:text-7xl text-5xl font-bold'>
                  {' '}
                  <span className='lg:text-2xl text-[15px] align-top font-normal'>
                    $
                  </span>
                  29
                </h1>
                <div className='flex flex-col '>
                  <span className='lg:text-2xl text-[10px] font-semibold leading-2'>
                    99
                  </span>
                  <span className='lg:text-[15px] text-[10px] font-semibold leading-3'>
                    /month
                    <br /> per line
                  </span>
                </div>
              </div>
              <h1 className='font-semibold text-[15px] lg:text-2xl'>
                2+ LINES
              </h1>
            </div>
            {/* OR Section */}
            <div className='flex flex-col justify-center items-center relative'>
              <span className='absolute w-[2px] h-[100px] bg-white'></span>
              <div className='p-2 flex flex-col justify-center z-10 items-center font-bold text-black rounded-full bg-white'>
                OR
              </div>
            </div>
            {/* BY THE GIG */}
            <div className='flex flex-col justify-center items-center'>
              <h1 className='lg:text-[1.8rem] text-[1.4rem] font-bold tracking-wide'>
                BY THE GIG
              </h1>
              <div className='flex'>
                <h1 className='text-7xl  font-bold'>
                  {' '}
                  <span className='text-2xl align-top font-normal'>
                    $
                  </span>14{' '}
                </h1>
                <div className='flex flex-col '>
                  <span className='text-2xl font-semibold leading-2'>/GB</span>
                </div>
              </div>
            </div>
          </div>
          {/* Heading 4 */}
          <h1 className='lg:text-2xl md:text-[20px] pt-10 text-center tracking-wide'>
            <span className='font-semibold'>FREE</span> nationwide talk and
            text, including Canada and Mexico
          </h1>
          {/* Heading 5 */}
          <h1 className='lg:text-2xl md:text-[20px] pt-5 tracking-wide text-center'>
            <span className='font-semibold'>Text any country</span> at no
            additional Charge
          </h1>
          {/* border line */}
          <hr className='h-[4px] w-[80%] mt-10' />
          {/* Contact Number */}
          <h1 className='lg:text-3xl md:text-[20px] pt-5 tracking-wide font-bold '>
            Call 1-888-123-4567 today
          </h1>

          <h3 className='font-light text-[15px] pt-3'>
            Spectrum Internet required.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
