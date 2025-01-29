import Link from 'next/link'
import React from 'react'

const Growth = () => {
  return (
    <section className='bg-[#2A7CC7] flex md:h-screen h-[520px] w-screen'>
    <div className='md:w-4/6 w-full md:p-44 p-11'>
         <h5 className="text-base font-bold text-[#FFFFFF] md:text-start text-center uppercase mb-11">
         WORK WITH US
        </h5>
        <h2 className="text-[40px] font-bold text-[#FFFFFF] uppercase md:text-start text-center my-11">Now Let’s <br className='block md:hidden'/> grow Yours</h2>
        <p className="text-[#FFFFFF] font-normal text-sm my-11 md:text-start text-center">
        The gradual accumulation of <br className='block md:hidden'/> information about atomic and <br />
         small-scale behavior during the <br className='block md:hidden'/> first quarter of the 20th 
          
        </p>
        <button className="text-white px-[40px] py-[15px] gap-[10px] md:mx-0 mx-32 font-bold text-sm rounded-md border border-[#FAFAFA] bg-[#2A7CC7] hover:bg-white hover:text-[#2A7CC7]">
         <Link href='/pricing'>Button</Link>
        </button>
    </div>
    <div className='hidden md:block'>
        <img 
        src='/images/shop9.jpg'
        className='w-full h-screen object-cover'
        />
    </div>
    </section>
  )
}

export default Growth