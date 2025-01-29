"use client"
import React, { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pt-11 bg-[#FAFAFA] overflow-hidden md:mb-[-200px] mb-0 relative">
      <div className="text-center mb-12">
        <h2 className="text-[40px] font-bold text-[#252B42]">Pricing</h2>
        <p className="text-sm font-normal text-[#737373] mt-2">
          Problems trying to resolve <br className="md:hidden block"/> the conflict between <br className="hidden md:block"/>
          the two major <br className="md:hidden block"/> realms of Classical physics: <br className="md:hidden block"/> Newtonian mechanics
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-12">
        <h5 className={`text-base font-bold ${!isYearly ? "text-[#252B42]" : "text-[#737373]"}`}>
          Monthly
        </h5>
        <button
          className="relative w-12 h-6 bg-[#FFFFFF] border border-[#23A6F0] rounded-[16px] flex items-center"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`w-5 h-5 top-1 rounded-full bg-[#D0D0D0] border border-[#D0D0D0] duration-150 transform transition-transform ${
              isYearly ? "translate-x-6" : "translate-x-[2px]"
            }`}
          />
        </button>
        <h5 className={`text-base font-bold ${isYearly ? "text-[#252B42]" : "text-[#737373]"}`}>
          Yearly
        </h5>
        <button className="rounded-[37px] px-[20px] py-[10px] bg-[#B2E3FF] text-[#23A6F0] text-sm font-bold ml-1">
         <h6>Save 25%</h6>
        </button>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-[30px] mt-12">
        <div className="bg-[#FFFFFF] rounded-[10px] border border-[#23A6F0] pt-[50px] md:w-[327px] w-full h-[664px] text-center relative top-11 md:mb-0 mb-11">
          <h3 className="text-2xl font-bold text-[#252B42]">FREE</h3>
          <h5 className="text-base font-bold text-[#737373] my-8">Organize across all <br className="hidden md:block" />
          apps by hand</h5>
          <div className="flex justify-center items-center my-6 gap-2">
            <h2 className="text-[40px] text-[#23A6F0] font-bold">0</h2>
            <div className="flex flex-col items-start ml-2">
              <h3 className="text-2xl text-[#23A6F0] font-bold">$</h3>
              <h6 className="text-sm font-bold text-[#8EC2F2]">Per Month</h6>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>
                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>
                            <div className="md:hidden flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>

                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>                            <div className="md:hidden flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>

                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>                           
               <div className="md:hidden flex items-center text-start gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#BDBDBD] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>
                </div>
                <h6 className="text-[#252B42] font-bold text-sm">1GB  Cloud storage
                </h6>
              </div>                           
               <div className="md:hidden flex items-start text-start ml-[-5px] gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#BDBDBD] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>
                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Email and community <br />
support
</h6>
              </div>
              <div>
              <button className="text-[#252B42] bg-[#FFFFFF] border border-[#252B42] font-bold text-[14px] px-[40px] py-4 flex justify-center items-center rounded-md mx-auto my-5 hover:bg-gray-800 hover:text-white">
            Try for free
          </button>
              </div>


          </div>
        </div>

        <div className="bg-[#252B42] text-[#FFFFFF] rounded-[10px] border border-[#23A6F0] pt-[70px] md:w-[327px] w-full h-[704px] text-center relative">
          <h3 className="text-2xl font-bold">STANDARD</h3>
          <h5 className="text-base font-bold my-8">Organize across all <br className="hidden md:block" />
             apps by hand</h5>
          <div className="flex justify-center items-center my-6 gap-2">
            <h2 className="text-[40px] text-[#23A6F0] font-bold">9.99</h2>
            <div className="flex flex-col items-start ml-2">
              <h3 className="text-2xl text-[#23A6F0] font-bold">$</h3>
              <h6 className="text-sm font-bold text-[#8EC2F2]">Per Month</h6>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6 gap-4">
            {["Unlimited product updates", "Unlimited product updates", "Unlimited product updates", "1GB Cloud Storage", "Email and Community Support"].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>

                </div>
                <h6 className="text-[#FFFFFF] font-bold text-sm">{feature}</h6>
              </div>
            ))}
          </div>
          <div>
          <button className="text-[#FFFFFF] border border-[#FFFFFF] font-bold text-[14px] px-8 py-4 flex justify-center items-center rounded-md my-11 mx-auto hover:bg-white hover:text-[#252B42]">
            Try for Standard
          </button>
          </div>
        </div>

        <div className="bg-[#FFFFFF] rounded-[10px] border border-[#23A6F0] pt-[50px] md:w-[327px] w-full h-[664px] text-center md:relative md:top-11 top-0">
          <h3 className="text-2xl font-bold text-[#252B42]">PREMIUM</h3>
          <h5 className="text-base font-bold text-[#737373] my-8">Organize across all <br className="hidden md:block" />
          apps by hand</h5>
          <div className="flex justify-center items-center my-6 gap-2">
            <h2 className="text-[40px] text-[#23A6F0] font-bold">19.99</h2>
            <div className="flex flex-col items-start ml-2">
              <h3 className="text-2xl text-[#23A6F0] font-bold">$</h3>
              <h6 className="text-sm font-bold text-[#8EC2F2]">Per Month</h6>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>

                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>
                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>
                            <div className="md:hidden flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>

                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>                            <div className="md:hidden flex items-center gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>

                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Unlimited product updates</h6>
              </div>                           
               <div className="md:hidden flex items-center text-start gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>
                </div>
                <h6 className="text-[#252B42] font-bold text-sm">1GB  Cloud storage
                </h6>
              </div>                           
               <div className="md:hidden flex items-start text-start ml-[-5px] gap-2">
                <div className="w-[32px] h-[32px] rounded-full bg-[#2DC071] text-[#FFFFFF] font-semibold flex justify-center items-center">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7957 0.204347C15.8604 0.268958 15.9118 0.345714 15.9469 0.430218C15.9819 0.514722 16 0.605313 16 0.696803C16 0.788294 15.9819 0.878885 15.9469 0.963389C15.9118 1.04789 15.8604 1.12465 15.7957 1.18926L6.05781 10.9271C5.9932 10.9919 5.91645 11.0433 5.83194 11.0783C5.74744 11.1134 5.65685 11.1314 5.56536 11.1314C5.47387 11.1314 5.38328 11.1134 5.29877 11.0783C5.21427 11.0433 5.13751 10.9919 5.0729 10.9271L0.203982 6.05818C0.0733744 5.92757 0 5.75043 0 5.56572C0 5.38102 0.0733744 5.20387 0.203982 5.07327C0.33459 4.94266 0.511732 4.86928 0.696438 4.86928C0.881145 4.86928 1.05829 4.94266 1.1889 5.07327L5.56536 9.45112L14.8107 0.204347C14.8754 0.139572 14.9521 0.08818 15.0366 0.0531148C15.1211 0.0180496 15.2117 0 15.3032 0C15.3947 0 15.4853 0.0180496 15.5698 0.0531148C15.6543 0.08818 15.731 0.139572 15.7957 0.204347Z" fill="white"/>
</svg>
                </div>
                <h6 className="text-[#252B42] font-bold text-sm">Email and community <br />
support
</h6>
              </div>
              <div>
              <button className="text-[#252B42] bg-[#FFFFFF] border border-[#252B42] font-bold text-[14px] px-[40px] py-4 flex justify-center items-center rounded-md mx-auto my-5 hover:bg-gray-800 hover:text-white">
            Try for free
          </button>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
