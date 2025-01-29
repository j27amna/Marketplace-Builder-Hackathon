import React from 'react'
import Navbar from '../shop/components/Navbar'
import Logos from '../shop/components/Logos'
import { FaStar, FaRegStar ,FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoEye } from "react-icons/io5";
import Link from 'next/link';
import Addinfo from './components/Addinfo';
import Itemsbestseller from './components/Itemsbestseller';
import Footer from '../components/Footer';
import {Suspense} from "react";


const page = () => {
  return (
    <main>
        <Suspense>
            <Navbar />
        </Suspense>
        <Suspense>
    <section className="px-20 py-6 bg-[#FAFAFA]">
      <div className="flex items-center space-x-2 text-[#BDBDBD] font-bold text-md py-6 gap-3 md:text-start">
        <Link href="/" className="text-[#252B42] hover:underline">Home </Link>
        <GrNext />
        <h6 className="hover:text-gray-500"><Link href='/shop'> Shop </Link></h6>
      </div>

      <div className="md:flex md:flex-row flex-col mt-6 space-x-8">
        <div className="flex flex-col space-y-4 gap-8">
          <div className="relative">
            <img
              src="/images/item1.jpg"
              alt="Item"
              className="w-[500px] h-[450px] object-cover"
            />
            <button className="absolute left-2 top-60 font-extrabold text-3xl transform -translate-y-1/2 text-[#FFFFFF] hover:text-gray-400">
              <GrPrevious />
            </button>
            <button className="absolute right-2 top-60 font-extrabold text-3xl transform -translate-y-1/2 text-[#FFFFFF] hover:text-gray-400">
              <GrNext />
            </button>
          </div>
          <div className="flex space-x-2">
            <img
              src="/images/item2.jpg"
              alt="Thumbnail 1"
              className="w-20 h-20 object-cover brightness-75"
            />
            <img
              src="/images/item1.jpg"
              alt="Thumbnail 2"
              className="w-20 h-20 object-cover opacity-50 brightness-95"
            />
          </div>
        </div>

        <div className="md:w-1/2 w-screen md:px-6 md:py-0 px-0 py-11">
          <h4 className="text-2xl font-medium text-[#252B42] top-3 my-1">Floating Phone</h4>

          <div className="flex items-center md:space-x-2 space-x-0 text-xl gap-1 top-12 my-6">
            <div className="flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500 " />
            </div>
            <h6 className="text-[#737373] font-bold text-sm">10 Reviews</h6>
          </div>

          <h3 className="text-2xl font-bold text-[#252B42] my-2">$1,139.33</h3>

          <h6 className="text-[#737373] font-bold text-sm mt-1 mb-8">
            Availability  : <span className="text-[#23A6F0]"> In Stock</span>
          </h6>

          <p className="text-[#565656] text-sm font-medium">
          Met minim Mollie non desert <br className='md:hidden block'/> Alamo est sit cliquey dolor <br className="hidden md:block" />
do  <br className='md:hidden block'/>met sent. RELIT official consequent  <br className='md:hidden block'/>  door ENIM RELIT Mollie. <br className="hidden md:block" />
Excitation <br className='md:hidden block'/>venial consequent sent nostrum met.
          </p>

          <hr className="border-[#BDBDBD] top-[277px] mt-8 mb-7" />

          <div className="flex gap-3 my-11">
            <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full cursor-pointer"></div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <button className="px-[20px] py-[10px] bg-[#23A6F0] text-white rounded-md hover:bg-blue-500">
              Select Options
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart text-black text-2xl cursor-pointer hover:text-blue-500">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
        </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart text-black text-2xl cursor-pointer hover:text-blue-500">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
            <IoEye className="text-black text-xl cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
        </section>
        </Suspense>
        <Suspense>
            <Addinfo />
        </Suspense>
        <Suspense>
            <Itemsbestseller />
        </Suspense>
        <Suspense>
            <Logos />
        </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  )
}

export default page