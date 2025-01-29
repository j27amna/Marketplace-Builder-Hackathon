import React from "react";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Growth from "./components/Growth";
import Problems from "./components/Problems";
import Team from "./components/Team";
import Logos from "./components/Logos";
import Footer from "../components/Footer";
import {Suspense} from "react";
import Link from "next/link";


const AboutUs = () => {
  return (
    <main>
        <Suspense>
            <Navbar />
        </Suspense>
        <Suspense>
    <section className="flex md:flex-row flex-col items-center justify-between px-20 md:py-0 py-16 bg-white relative">
      <div className="md:w-1/2 w-full px-16 items-center ">
        <h5 className="text-base font-bold text-[#252B42] uppercase mb-11 md:block hidden">
          About Company
        </h5>
        <h1 className="md:text-[58px] text-[40px] font-bold text-[#252B42] uppercase md:my-11 my-3 md:text-start text-center text-nowrap">About Us</h1>
        <h4 className="text-[#737373] font-normal text-xl my-11 md:text-start text-center">
          We know how large objects will act, <br className="hidden md:block" />
           but things on a small scale.
        </h4>
        <Link href='/contact'>
        <button className="bg-[#23A6F0] text-white px-[40px] py-[15px] gap-[10px] font-bold text-sm rounded-md text-nowrap md:mb-0 mb-16 hover:bg-blue-500">
          Get Quote Now
        </button>
        </Link>
      </div>

      <div className="md:w-1/2 w-full relative px-16">
        <div className="absolute bg-[#FFE9EA] rounded-full md:h-[570px] md:w-[570px] h-[295px] w-[295px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bg-[#FFE9EA] rounded-full md:h-[78px] md:w-[78px] h-[47px] w-[47px] top-4 left-4"></div>
        <div className="absolute bg-[#977DF4] rounded-full md:h-[14px] md:w-[14px] h-[9px] w-[9px] bottom-16 left-4"></div>
        <div className="absolute bg-[#977DF4] rounded-full md:h-[14px] md:w-[14px] h-[9px] w-[9px] top-10 right-7"></div>
        <div className="absolute bg-[#FFE9EA] rounded-full md:h-[30px] md:w-[30px] h-[18px] w-[18px] top-1/2 right-0 transform -translate-y-1/2"></div>
        <img
          src="/images/aboutus.png"
          alt="Shopping Bags"
          className="relative z-10 md:h-[668px] md:w-[570px] h-[439px] w-[375px] top-[-56px] object-cover"
        />
      </div>
    </section>
    </Suspense>
    <Suspense>
        <Problems />
    </Suspense>
    <Suspense>
        <Video />
    </Suspense>
    <Suspense>
        <Team />
    </Suspense>
    <Suspense>
        <Logos />
    </Suspense>
    <Suspense>
        <Growth />
    </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
};

export default AboutUs;
