import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FreeTrialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="flex flex-col items-center text-center px-6 gap-[30px]">
        <h2 className="text-[40px] font-bold text-[#252B42]">
          Start your <br className="md:hidden block"/> 14 days free trial
        </h2>
        <p className="my-3 text-[#737373] text-sm font-normal max-w-lg">
          Met minim Mollie non desert Alamo est sit cliquey dolor <br className="hidden md:block"/>
           do met sent. RELIT official consequent.
        </p>
        <Link href='/pricing'>
        <button className="mb-1 px-[40px] py-[15px] font-bold text-sm bg-[#23A6F0] text-[#FFFFFF] rounded-md hover:bg-blue-500">
          Try it free now
        </button>
        </Link>
        <div className="flex gap-[35px] mt-8">
          <FaTwitter className="w-[30px] h-[30px] cursor-pointer text-[#55ACEE] hover:text-blue-600" />
          <FaFacebookF className="w-[30px] h-[30px] pt-1 cursor-pointer bg-[#395185] text-white hover:bg-blue-800" />
          <FaInstagram className="w-[30px] h-[30px] cursor-pointer text-black hover:text-pink-500" />
          <FaLinkedinIn className="w-[30px] h-[30px] pt-1 cursor-pointer bg-[#0A66C2] text-white hover:bg-blue-700" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
