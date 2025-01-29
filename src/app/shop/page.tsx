import React from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'
import Pagination from './components/Pagination'
import Shopcard from './components/Shopcard'
import Logos from './components/Logos'
import Footer from '../components/Footer'
import {Suspense} from "react";

const ShopPage = () => {
  return (
    <main>
        <Suspense>
            <Navbar />
        </Suspense>
  <Suspense>
    <section className="py-12 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center my-8 mx-5">
          <h3 className="text-2xl font-bold text-[#252B42]">Shop</h3>
          <nav className="text-sm text-[#252B42] font-bold gap-[15px] py-2 mr-11">
           <Link href="/" className='hover:underline'> Home </Link><span className="mx-1 w-3 h-4 text-[#BDBDBD]"> &gt; </span> <span className='text-[#BDBDBD]'> Shop </span>
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[15px] mb-24 md:w-[1080px] md:h-[220px] h-[1628px] w-auto">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative group overflow-hidden cursor-pointer hover:shadow-2xl"
            >
              <Link href='/items'>
              <img
                src={`/images/cloths${i + 1}.jpg`}
                alt={`Cloth ${i + 1}`}
                className="md:w-[220px] md:h-[220px] h-[340px] w-auto filter brightness-100 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-100 bg-black/50 hover:bg-black/30 transition">
                <h3 className="text-base font-bold my-3">CLOTHS</h3>
                <p className="text-sm font-normal">5 Items</p>
              </div>
              </Link>
            </div>
            
          ))}
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center w-auto h-[98px] my-8 bg-[#FFFFFF]">
          <h6 className="text-sm font-bold text-[#737373]">
            Showing all 12 results
          </h6>
          <div className="flex items-center gap-4">
            <h6 className="text-sm font-bold text-[#737373]">Views:</h6>
            <button className="text-[#252B42] border border-gray-300 rounded-md p-[15px] hover:border-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft" viewBox="0 0 16 16">
  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
</svg>
            </button>
            <button className="text-gray-500 border border-gray-300 rounded-md p-[15px] hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg>
            </button>
           </div>
           <div className='flex items-center gap-[15px]'> 
            <select className="w-[140px] h-[50px] bg-[#F9F9F9] border border-[#DDDDDD] rounded-[5px] px-3 py-1 text-sm text-[#737373] font-normal">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="bg-[#23A6F0] px-[24px] py-[14px] rounded-[5px] gap-[10px] hover:bg-[#2098de] transition">
              <h6 className='font-bold text-sm text-[#FFFFFF]'> Filter </h6>
            </button>
          </div>
        </div>
      </div>
    </section>
    </Suspense>
    <Suspense>
        <Shopcard />
    </Suspense>
    <Suspense>
        <Pagination />
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

export default ShopPage;
