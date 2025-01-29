import React from "react";

const ProblemsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-[#E74040] font-normal text-sm my-8">Problems trying</p>
            <h3 className="text-2xl font-bold text-[#252B42]">
              Met minim Mollie non desert  <br className="hidden md:block" />
               Alamo est sit cliquey dolor do  <br className="hidden md:block" />
               met sent.
            </h3>
          </div>
          <div>
            <p className="text-[#737373] text-sm font-normal mt-8">
              Problems trying to resolve the conflict between the two major realms of  <br className="hidden md:block" />
              Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center text-center my-36">
          <div className="w-full md:w-1/4 mb-11 md:mb-0">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[#737373] text-sm font-bold mt-2">Happy Customers</h5>
          </div>
          <div className="w-full md:w-1/4 mb-11 md:mb-0">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[#737373] text-sm font-bold mt-2">Monthly Visitors</h5>
          </div>
          <div className="w-full md:w-1/4 mb-11 md:mb-0">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="text-[#737373] text-sm font-bold mt-2">Countries Worldwide</h5>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[#737373] text-sm font-bold mt-2">Top Partners</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
