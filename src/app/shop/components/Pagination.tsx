import React from "react";

const PaginationControl = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <button
        className="p-[25px] h-[75px] w-[84px] text-gray-400 bg-[#F3F3F3] text-sm font-bold border border-[#BDBDBD] rounded-l-md cursor-not-allowed"
        disabled
      >
        First
      </button>
      <button className="px-[20px] py-[25px]  h-[75px] text-[#23A6F0] bg-white border border-y-[#BDBDBD] border-x-[#E9E9E9] font-bold text-sm items-center">
        1
      </button>
      <button className="px-[20px] py-[25px]  h-[75px] text-white bg-[#23A6F0] border border-y-[#BDBDBD] border-x-[#E9E9E9]  font-bold text-sm items-center">
        2
      </button>
      <button className="px-[20px] py-[25px]  h-[75px] text-[#23A6F0] bg-white border border-y-[#BDBDBD] border-x-[#E9E9E9]  font-bold text-sm items-center">
        3
      </button>
      <button className="p-[25px] h-[75px] w-[84px] text-[#23A6F0] bg-white border border-[#BDBDBD] border-l-[#E9E9E9]  font-bold text-sm items-center rounded-r-md">
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
