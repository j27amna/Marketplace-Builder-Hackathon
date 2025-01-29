const VitaClassicProduct = () => {
    return (
      <section className="bg-[#23856D] md:pt-[80px] md:h-[711px] h-[1100px] pt-[35px] overflow-hidden">
        <div className="max-w-6xl md:mx-44 md:px-6 mx-11 px-1 flex flex-col md:flex-row pt-[20px]">
          <div className="md:w-1/2 text-white text-center md:text-left gap-[30px]">
            <h4 className="text-xl font-semibold uppercase mb-4 pt-11">Summer 2020</h4>
            <h1 className="text-5xl md:text-6xl font-bold my-8 gap-[5px]">Vita Classic <br /> Product</h1>
            <p className="text-base font-normal mb-8">
            We know how large objects <br className="block md:hidden" /> will act, We know <br className="hidden md:block" /> how are objects will act, <br className="block md:hidden" /> We know
            </p>
            <div className="flex md:flex-row flex-col items-center justify-center md:justify-start gap-9">
              <h3 className="text-2xl font-bold text-[#FFFFFF]">$16.48</h3>
              <button className="bg-[#2DC071] text-[#FFFFFF] text-[14px] py-[18px] px-[40px] rounded-md shadow-md uppercase font-bold hover:bg-[#FFFFFF] hover:text-[#2DC071] hover:px-[43px] transition">
                Add to Cart
              </button>
            </div>
          </div>
            <div className="md:w-1/2 mt-11 md:mt-2 md:mb-0 md:ml-32 ml-0 w-[416px] ">
            <img
              src="/images/vitaproduct.jpg"
              alt="Vita Classic Product"
              className="w-full md:h-screen h-[630px] bottom-0 md:bottom-[-300px] "
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default VitaClassicProduct;
  