import Link from "next/link";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex md:flex-row flex-col items-center justify-between px-8 md:py-4 py-11 md:h-[91px] h-[532px] shadow-md bg-[#FFFFFF]">
            <div className='md:w-full flex flex-row justify-between w-full'>
        <div>
            <h3 className='text-[#252B42] font-bold text-2xl px-3'>Bandage</h3>
        </div>
        <div className='md:hidden text-[#252B42] font-bold flex flex-row justify-between items-center text-[24px] w-30 ml-2 gap-8'>
          <Link href='/'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> </Link>
          <Link href='/'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> </Link>
          <Link href='/'><BiMenuAltRight /></Link>
        </div>
      </div> 


      <div className="flex md:justify-between md:w-4/5 justify-center w-full">

      <div className="flex md:flex-row flex-col text-[#737373] md:font-bold font-normal md:pb-0 pb-11 md:text-base text-3xl md:gap-[28px] gap-8 items-center">
        <Link href="/" className="hover:text-[#252B42]">Home</Link>
        <Link href="/shop" className="hover:text-[#252B42]">Product</Link>
        <Link href="/pricing" className="hover:text-[#252B42]">Pricing</Link>
        <Link href="/contact" className="hover:text-[#252B42] cursor-pointer">Contact</Link>
      </div>

      <div className="md:flex items-center gap-[45px] px-11 hidden">
        <button className="md:text-[#23A6F0] md:text-right md:text-base md:font-bold md:px-6 md:py-2 md:hover:text-blue-600">
          Login
        </button>
        <button className="md:bg-[#23A6F0] md:text-white md:font-bold md:text-sm md:rounded-md md:px-[25px] md:py-[15px] md:hover:bg-blue-500 md:hover:px-[26px]">
         <Link href='/pricing' className="text-nowrap">Become a member →</Link>
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
