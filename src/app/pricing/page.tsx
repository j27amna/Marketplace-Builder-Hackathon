import React from 'react'
import Navbar from '../about/components/Navbar'
import { AiOutlineRight } from 'react-icons/ai'
import Prices from './components/Prices'
import Logos from './components/Logos'
import Faqs from './components/Faqs'
import Freetrial from '../innovation/components/Freetrial'
import Footer from '../components/Footer'
import {Suspense} from "react";

const page = () => {
  return (
    <main>
        <Suspense>
            <Navbar />
        </Suspense>
        <Suspense>
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
             <h5 className="text-base font-bold text-[#737373] uppercase">
             PRICING
             </h5>
             <h1 className="md:text-[58px] text-[40px] text-nowrap font-bold text-[#252B42] mt-2">
             Simple Pricing
             </h1>
             <div className="flex justify-center items-center gap-[15px] py-[10px] text-[#737373] font-bold text-sm">
              <a href="/" className="text-[#252B42] hover:underline">Home</a>
                <AiOutlineRight />
              <h6>Pricing</h6>
             </div>
            </div>
        </section>
        </Suspense>
        <Suspense>
            <Prices />
        </Suspense>
        <Suspense>
            <Logos />
        </Suspense>
        <Suspense>
            <Faqs />
        </Suspense>
        <Suspense>
            <Freetrial />
        </Suspense>
        <Suspense>
            <Footer />
        </Suspense>
    </main>
  )
}

export default page