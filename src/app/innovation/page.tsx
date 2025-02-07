import { AiOutlineRight } from "react-icons/ai";
import Navbar from "../about/components/Navbar";
import Freetrial from "./components/Freetrial";
import Team from "./components/Team";
import Footer from "../components/Footer";
import {Suspense} from "react";
import Link from 'next/link';

const InnovationSection = () => {
  return (
    <main>
        <Suspense>
            <Navbar />
        </Suspense>
        <Suspense>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h5 className="text-base font-bold text-[#737373] uppercase">
          What we do
        </h5>
        <h1 className="md:text-[58px] text-[40px] font-bold text-[#252B42] mt-2">
          Innovation tailored <br className="md:hidden block"/> for you
        </h1>

        <div className="flex justify-center items-center gap-[15px] py-[10px] text-[#737373] font-bold text-sm">
          <Link href="/" className="text-[#252B42] hover:underline">Home</Link>
          <AiOutlineRight />
          <h6>Team</h6>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-12">
          <div className="col-span-2 row-span-2">
            <img
              src="/images/innovation1.jpg"
              alt="Large"
              className="w-[700px] h-[530px] object-cover hover:shadow-md hover:brightness-75 cursor-pointer hover-affect"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src="/images/innovation2.jpg"
              alt="Small"
              className="w-[361px] h-[260px] object-cover hover:shadow-md hover:brightness-75 cursor-pointer hover-affect"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src="/images/innovation4.jpg"
              alt="Small"
              className="w-[361px] h-[260px] object-cover hover:shadow-md hover:brightness-75 cursor-pointer hover-affect"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src="/images/innovation3.jpg"
              alt="Small"
              className="w-[361px] h-[260px] object-cover hover:shadow-md hover:brightness-75 cursor-pointer hover-affect"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src="/images/innovation5.jpg"
              alt="Small"
              className="w-[361px] h-[260px] object-cover hover:shadow-md hover:brightness-75 cursor-pointer hover-affect"
            />
          </div>
        </div>
      </div>
    </section>
    </Suspense>
    <Suspense>
        <Team />
    </Suspense>
    <Suspense>
        <Freetrial />
    </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
};

export default InnovationSection;
