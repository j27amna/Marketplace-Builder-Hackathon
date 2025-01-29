import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

const RequestSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h6 className="text-sm text-[#252B42] font-bold">VISIT OUR OFFICE</h6>
        <h2 className="text-[40px] font-bold text-[#252B42] mt-2">
          We help small <br className="md:hidden block"/> businesses <br/> 
          with big ideas
        </h2>
      </div>

      <div className="flex md:flex-row flex-col justify-center md:items-stretch items-center md:gap-0 gap-[30px]">
        <div className="bg-[#FFFFFF] flex flex-col items-center py-[50px] w-[328px] h-[343px] my-6 md:mt-0 mt-16">
          <FiPhone className="h-[70px] w-[95px] text-9xl text-[#23A6F0] mb-4" />
          <div className="flex flex-col text-center">
            <h6 className="text-sm font-bold text-[#252B42]">georgia.young@example.com</h6>
            <h6 className="text-sm font-bold text-[#252B42]">georgia.young@ple.com</h6>
            <h5 className="text-base font-bold text-[#252B42] mt-4">Get Support</h5>
          </div>
          <button className="mt-4 px-[36px] py-[15px] border border-[#23A6F0] text-[#23A6F0] rounded-[37px] hover:bg-[#23A6F0] hover:text-[#FFFFFF] duration-100 transition">
          <h6 className="font-bold text-sm">Submit Request</h6>
          </button>
        </div>

        <div className="bg-[#252B42] flex flex-col items-center py-[80px] w-[330px] h-[400px] relative">
          <IoLocationSharp className="h-[70px] w-[95px] text-9xl text-[#23A6F0] mb-4" />
          <div className="flex flex-col text-center">
            <h6 className="text-sm font-bold text-[#FFFFFF]">georgia.young@example.com</h6>
            <h6 className="text-sm font-bold text-[#FFFFFF]">georgia.young@ple.com</h6>
            <h5 className="text-base font-bold text-[#FFFFFF] mt-6">Get Support</h5>
          </div>
          <button className="mt-4 px-[36px] py-[15px] border border-[#23A6F0] text-[#23A6F0] rounded-[37px] hover:bg-[#23A6F0] hover:text-[#FFFFFF] duration-100 transition">
           <h6 className="font-bold text-sm">Submit Request</h6>
          </button>
        </div>

        <div className="bg-[#FFFFFF] flex flex-col items-center py-[50px] w-[328px] h-[343px] my-6">
          <IoIosMail className="h-[70px] w-[95px] text-9xl text-[#23A6F0] mb-4" />
          <div className="flex flex-col text-center">
            <h6 className="text-sm font-bold text-[#252B42]">georgia.young@example.com</h6>
            <h6 className="text-sm font-bold text-[#252B42]">georgia.young@ple.com</h6>
            <h5 className="text-base font-bold text-[#252B42] mt-6">Get Support</h5>
          </div>
          <button className="mt-4 px-[36px] py-[15px] border border-[#23A6F0] text-[#23A6F0] rounded-[37px] hover:bg-[#23A6F0] hover:text-[#FFFFFF] duration-100 transition">
          <h6 className="font-bold text-sm">Submit Request</h6>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;
