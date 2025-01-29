const Editorspick = () => {
  return (
    <section className="py-[80px] bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3 className="text-2xl font-bold mb-4 text-[#252B42]">Editor's Pick</h3>
        <p className="text-[#737373] text-[14px] font-normal mb-8">
          Problems trying to resolve <br className="block md:hidden" /> the conflict between trends and quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-6 sm:m-0 m-11">
          <div className="relative sm:col-span-2 sm:row-span-2">
            <img
              src="/images/men.jpg"
              alt="men"
              className="w-full h-[500px] object-cover shadow-md hover:opacity-75 transition"
            />
            <div className="absolute bottom-4 left-[120px] transform -translate-x-1/2">
              <button className="bg-[#FFFFFF] text-[#252B42] py-[12px] px-[65px] shadow-md hover:bg-[#252B42] hover:text-[#FFFFFF] transition">
                <h5 className="text-base font-bold uppercase">MEN</h5>
              </button>
            </div>
          </div>

          <div className="relative sm:col-span-1 sm:row-span-2">
            <img
              src="/images/women.jpg"
              alt="women"
              className="w-full h-[500px] object-cover shadow-md hover:opacity-75 transition"
            />
            <div className="absolute bottom-4 left-[90px] transform -translate-x-1/2">
              <button className="bg-[#FFFFFF] text-[#252B42] py-[12px] px-[32px] shadow-md hover:bg-[#252B42] hover:text-[#FFFFFF] transition">
                <h5 className="text-base font-bold uppercase">WOMEN</h5>
              </button>
            </div>
          </div>

          <div className="relative sm:col-span-1 sm:row-span-1">
            <img
              src="/images/accessories.jpg"
              alt="accessories"
              className="w-full h-[240px] object-cover shadow-md hover:opacity-75 transition"
            />
            <div className="absolute bottom-4 left-[100px] transform -translate-x-1/2">
              <button className="bg-[#FFFFFF] text-[#252B42] py-[12px] px-[25px] shadow-md hover:bg-[#252B42] hover:text-[#FFFFFF] transition">
                <h5 className="text-base font-bold uppercase">ACCESSORIES</h5>
              </button>
            </div>
          </div>

          <div className="relative sm:col-span-1 sm:row-span-1">
            <img
              src="/images/kids.jpg"
              alt="kids"
              className="w-full h-[240px] object-cover shadow-md hover:opacity-75 transition"
            />
            <div className="absolute bottom-4 left-[80px] transform -translate-x-1/2">
              <button className="bg-[#FFFFFF] text-[#252B42] py-[12px] px-[40px] shadow-md hover:bg-[#252B42] hover:text-[#FFFFFF] transition">
                <h5 className="text-base font-bold uppercase">KIDS</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorspick;
