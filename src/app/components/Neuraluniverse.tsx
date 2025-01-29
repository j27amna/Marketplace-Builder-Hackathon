import Link from "next/link";

const NeuralUniverse = () => {
    return (
      <section className="py-0 bg-white h-[682px]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row md:gap-8 gap-1 overflow-hidden">
          <div className="flex-1 md:w-[1120px] w-screen h-screen md:top-[-211px] top-0">
            <img
              src="/images/neural-universe.png"
              alt="Neural Universe"
              className="object-cover h-screen"
            />
          </div>
  
          <div className="flex-1 md:text-left text-center mx-11 gap-[30px] md:my-32 md:py-8 my-11 py-3">
            <h5 className="text-md text-[#BDBDBD] font-bold mb-6">
              SUMMER 2020
            </h5>
            <h2 className="text-4xl font-bold text-[#252B42] mb-6">
              Part of the <br className="block md:hidden" /> Neural <br /> Universe
            </h2>
            <h4 className="text-xl font-medium text-[#737373e0] mb-8">
            We know how large <br className="block md:hidden" /> objects will act, 
            but <br className="block md:hidden" /> things on a small scale.
            </h4>
            <div className="flex md:flex-row flex-col items-center gap-2">
              <Link href='/items'>
              <button className="bg-[#2DC071] text-white font-bold text-sm px-[40px] py-[15px] rounded shadow hover:bg-white hover:text-[#2DC071] hover:border hover:border-[#2DC071] transition">
                BUY NOW
              </button>
              </Link>
              <Link href='/about'>
              <button className="border border-[#2DC071] text-[#2DC071] bg-[#FFFFFF] font-bold text-sm px-[40px] py-[15px] rounded shadow hover:bg-gray-100 hover:px-[42px] transition">
                READ MORE
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default NeuralUniverse;
  