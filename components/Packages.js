import React from 'react'
import { TiTick } from "react-icons/ti";
const Packages = () => {
  return (
    <div className='md:w-screen md:h-screen w-full '>
      <div className="w-full h-full flex flex-col  items-center">
        <div className='text-center md:p-8 pt-8 px-6'>
        <h1 className='xl:text-6xl md:text-4xl text-3xl font-light '>Spectrum Internet Speeds</h1>
        <h1 className='xl:text-[1.7rem] md:text-[1.2rem] text-center py-5  font-light leading-8  tracking-tight text-gray-400  '>See how fast you can go eith Spectrum Internet, Ultra and Gig.Learn more <br/>
            aboutSpectrum Internet Speeds. Wireless speeds may very. </h1>
            </div>
            <div className='md:flex flow-col md:flow-row w-full h-auto justify-center items-center md:p-0 p-10  '>
                {/* Card 1 */}
                <div className="md:w-1/4  my-2 mx-4 border-2 xl:h-[60vh] h-full items-center flex flex-col md:px-0 px-10">
                    <h1 className='text-[2rem] md:text-[15px] xl:text-3xl  font-semibold tracking-wider p-2'>INTERNET</h1>
                    <hr className='bg-gray-500 w-full my-4' />

                    <div className='flex'>
        <h1 className='text-[6rem] font-bold md:text-[3.5rem] lg:text-[5rem] xl:text-[5rem]'> <span className='text-4xl font-bold align-top '>$</span>49</h1>
        <div className='flex flex-col gap-2'>
        <h1 className=' text-[15px] md:text-[10px] lg:text-[1rem] leading-[1px] font-semibold  '><span className='lg:text-2xl xl:text-3xl'>99</span>/mo</h1>
                                        <span className= 'text-[15px] md:text-[10px] lg:text-[10px] xl:text-[15px] font-semibold   md:leading-[0px] xl:leading-3 '>for 12 mos*</span>
                                </div>
        </div>

        <h1 className=' text-[1.5rem] md:text-[1rem] lg:text-[1.3rem] font-semibold text-center p-4 xl:leading-7'>Get high-speed Internet with NO data caps</h1>
        <div className='flex flex-col justify-center px-4 py-8   text-gray-400 md:py-3'>
            
            <h1  className="md:text-[1rem] text-[1.3rem] lg:text-[1.1rem] flex leading-10 md:leading-normal  tracking-tighter" ><span className='text-blue-400  xl:text-4xl'><TiTick /></span>
            Speed up to 200 Mbps</h1>
            <h1  className="md:text-[1rem] text-[1.3rem] lg:text-[1.1rem] flex  tracking-tighter xl:leading-7" ><span className='text-blue-400  xl:text-4xl'><TiTick /></span>
            FREE Internet modem and Internet security software</h1>
                
            </div>
                </div>
                {/* Card 2 */}
                <div className="md:w-1/4 my-2 mx-4 border-2 xl:h-[60vh] h-full items-center flex flex-col md:px-0 px-10">
                    <h1 className='text-[2rem] md:text-[15px] xl:text-3xl font-semibold tracking-wider p-2'>INTERNET ULTRA</h1>
                    <hr className='bg-gray-500 w-full my-4' />

                    <div className='flex'>
        <h1 className='text-[6rem] font-bold  md:text-[3.5rem] lg:text-[5rem] '> <span className='text-4xl font-bold align-top '>$</span>69</h1>
        <div className='flex flex-col gap-2'>
        <h1 className=' text-[15px] md:text-[10px] lg:text-2xl  font-semibold leading-[1px] md:leading-2 '><span className='lg:text-2xl xl:text-3xl'>99</span>/mo</h1>
                                        <span className= 'text-[15px] md:text-[10px] lg:text-[10px] xl:text-[15px] font-semibold   md:leading-[0px] xl:leading-3 '>for 12 mos*</span>
                                </div>
        </div>

        <h1 className='text-[1.3rem] md:text-[0.9rem] lg:text-[1.3rem] font-semibold text-center p-4 md:leading-[20px] xl:leading-7'>Ready to Support Next-Gen Online Gaming with Internet Ultra</h1>
        <div className='flex flex-col  text-gray-400 py-3'>
            
            <h1  className="md:text-[1rem] text-[1.3rem] lg:text-[1.1rem]  flex  tracking-tighter leading-10 md:leading-normal" ><span className='text-blue-400  xl:text-4xl'><TiTick /></span>
            Speed up to 400 Mbps</h1>
            <h1  className="md:text-[1rem] text-[1.3rem] lg:text-[1.1rem] flex  tracking-tighter leading-7" ><span className='text-blue-400  xl:text-4xl'><TiTick /></span>
            FREE Internet modem and Internet security software</h1>
                
            </div>
                </div>
                    {/* card 3 */}
                    <div className="md:w-1/4  my-2 mx-4 border-2 h-full xl:h-[60vh] items-center flex flex-col md:px-0 px-10">
                        <h1 className='text-[2rem] md:text-[15px] xl:text-3xl  font-semibold tracking-wider p-2'>INTERNET GIG</h1>
                        <hr className='bg-gray-500 w-full my-4' />

                        <div className='flex'>
            <h1 className='text-[6rem] font-bold  md:text-[3.5rem] lg:text-[5rem] '> <span className='text-4xl font-bold align-top '>$</span>89</h1>
            <div className='flex flex-col gap-2'>
                                        <h1 className=' text-[15px] md:text-[10px] lg:text-2xl leading-[1px]  font-semibold leading-2 '><span className='lg:text-2xl xl:text-3xl'>99</span>/mo</h1>
                                        <span className= 'text-[15px] md:text-[10px] lg:text-[10px] xl:text-[15px] font-semibold   md:leading-[0px] xl:leading-3 '>for 12 mos*</span>
                                    </div>
            </div>

            <h1 className='text-[1.7rem] md:text-[.9rem] lg:text-[1.3rem] font-semibold text-center p-4 leading-7'>Get high-speed Internet with NO data caps</h1>
            <div className='flex flex-col  text-gray-400 py-3 
            
            '>
                
                <h1  className="md:text-[1rem] text-[1.3rem] lg:text-[1.1rem] flex  tracking-tighter leading- xl:leading-normal" ><span className='text-blue-400  xl:text-4xl'><TiTick /></span>
                Speed up to 1 Gbps-our fastest speed available  </h1>
                <h1  className="md:text-[1rem] text-[1.3rem] lg:text-[1.1em] flex  tracking-tighter xl:leading-7" ><span className='text-blue-400  xl:text-4xl'><TiTick /></span>
                FREE Internet modem and Internet security software</h1>
                    
                </div>
                    </div>
               
            </div>
      </div>
    </div>
  )
}

export default Packages
