import React from "react";
import Navbar from "../about/components/Navbar";
import Request from "./components/Request";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Talk from "./components/Talk";
import Footer from "../components/Footer";
import {Suspense} from "react";

const Contact = () => {
    return (
      <main>
          <Suspense>
              <Navbar />
          </Suspense>
          <Suspense>
      <section className="flex md:flex-row flex-col justify-between px-20 py-16 bg-white relative">
        <div className="md:w-1/2 md:p-14 w-full p-8 md:text-start text-center">
          <h5 className="text-base font-bold text-[#252B42] uppercase mb-8">
          CONTACT US
          </h5>
          <h1 className="md:text-[58px] text-[40px] font-bold text-[#252B42] my-8">Get in touch <br className="hidden md:block"/>
          today!</h1>
          <h4 className="text-[#737373] font-normal text-xl my-8">
            We know how large objects will act, <br className="hidden md:block" />
             but things on a small scale.
          </h4>
          <h3 className="font-bold text-2xl text-[#252B42] mb-6">Phone ; +451 215 215 </h3>
          <h3 className="font-bold text-2xl text-[#252B42] mb-8">Fax : +451 215 215 </h3>
           <div className="flex gap-[35px] mt-8 md:mx-0 mx-11">
                    <FaTwitter className="w-[30px] h-[30px] cursor-pointer text-[#252B42] hover:text-blue-600" />
                    <FaFacebookF className="w-[30px] h-[30px] pt-1 cursor-pointer bg-[#252B42] text-white hover:bg-blue-800" />
                    <FaInstagram className="w-[30px] h-[30px] cursor-pointer text-[#252B42] hover:text-pink-500" />
                    <FaLinkedinIn className="w-[30px] h-[30px] pt-1 cursor-pointer bg-[#252B42] text-white hover:bg-blue-700" />
                  </div>
        </div>
  
        <div className="md:w-1/2 w-full relative px-16">
          <div className="absolute bg-[#FFE9EA] rounded-full md:h-[570px] md:w-[570px] h-[295px] w-[295px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bg-[#FFE9EA] rounded-full md:h-[78px] md:w-[78px] h-[47px] w-[47px] top-4 left-4"></div>
          <div className="absolute bg-[#977DF4] rounded-full md:h-[14px] md:w-[14px] h-[9px] w-[9px] bottom-16 left-4"></div>
          <div className="absolute bg-[#977DF4] rounded-full md:h-[14px] md:w-[14px] h-[9px] w-[9px] top-40 right-7"></div>
          <div className="absolute bg-[#FFE9EA] rounded-full md:h-[30px] md:w-[30px] h-[18px] w-[18px] top-1/2 right-0 transform -translate-y-1/2"></div>
  
          <img
            src="/images/contact.png"
            alt="Shopping Bags"
            className="relative z-10 md:h-[668px] md:w-[570px] h-[439px] w-[375px] md:top-[-56px] object-cover"
          />
        </div>
    </section>
    </Suspense>
    <Suspense>
        <Request />
    </Suspense>
    <Suspense>
        <Talk />
    </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
</main>
    ) };

    export default Contact;