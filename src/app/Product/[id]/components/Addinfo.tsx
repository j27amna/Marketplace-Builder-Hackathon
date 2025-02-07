import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const AdditionalInfo = () => {
  return (
    <div className="pt-3 pb-12 px-14">
      <div className="flex justify-center items-center text-sm font-bold md:gap-4 gap-1 text-[#737373]">
        <Link href="#" className="hover:text-blue-500 p-6">Description</Link>
        <Link href="#" className="hover:text-blue-500 p-6">Additional Information</Link>
        <Link href="#" className="hover:text-blue-500 p-6">Reviews <span className="text-[#23856D]"> (0) </span></Link>
      </div>
      
      <hr className=" border border-[#ECECEC]  mt-4 mb-8" />

      <div className="grid md:grid-cols-3 grid-flow-row gap-8 mx-11">
        <div className="rounded-md overflow-hidden md:w-[362px] md:h-[390px] w-[321px] h-[271px]">
          <img
            src="/images/foximg.jpg"
            alt="Decorative"
            className="md:w-[362px] md:h-[390px]  w-[321px] h-[271px] object-cover"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
          <p className="text-[#737373] font-medium text-sm"> Met minim Mollie non desert Alamo est sit <br className="hidden md:block" />
             cliquey dolor do met sent. RELIT official <br className="hidden md:block" />
              consequent door ENIM RELIT Mollie. <br className="hidden md:block" />
               Excitation venial consequent sent nostrum <br className="hidden md:block" />
                met.
          </p>

          <p className="text-[#737373] font-medium text-sm"> Met minim Mollie non desert Alamo est sit <br className="hidden md:block" />
             cliquey dolor do met sent. RELIT official <br className="hidden md:block" />
              consequent door ENIM RELIT Mollie. <br className="hidden md:block" />
               Excitation venial consequent sent nostrum <br className="hidden md:block" />
                met.
          </p>

          <p className="text-[#737373] font-medium text-sm"> Met minim Mollie non desert Alamo est sit <br className="hidden md:block" />
             cliquey dolor do met sent. RELIT official <br className="hidden md:block" />
              consequent door ENIM RELIT Mollie. <br className="hidden md:block" />
               Excitation venial consequent sent nostrum <br className="hidden md:block" />
                met.
          </p>
        </div>

        <div className="space-y-6">
          <div>
          <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
            <div className="space-y-2 mt-4">
            <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
              <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
              <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
              <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
            </div>
          </div>

          <div>
          <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
            <div className="space-y-2 mt-4">
              <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
              <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
              <h6 className="flex items-center text-[#737373] font-bold text-sm gap-5">
                <FaChevronRight className=" text-gray-400 text-lg" />
                the quick fox jumps over the lazy dog
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
