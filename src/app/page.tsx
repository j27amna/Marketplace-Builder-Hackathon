import {Suspense} from "react";
import Editorspick from "./components/Editorspick"
import Bestsellers from "./components/Bestsellers"
import Vitaproducts from "./components/Vitaproducts"
import Featuredposts from "./components/Featuredposts"
import Neuraluniverse from "./components/Neuraluniverse"
import Link from "next/link"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main>
      <Suspense>
        <Navigation />
      </Suspense>
      <Suspense>
    <section className="bg-heroimg md:w-full md:h-[715px] md:object-cover md:bg-center bg-left h-[753px] w-screen">
      <div className="text-white md:items-center md:justify-start md:py-[130px] md:px-[195px] md:top-[48px] md:left-[198px] md:gap-[80px]
      py-[48px] gap-[30px] px-[40px] justify-center">
        <div className="pt-14 mt-3">
         <h5 className="text-[16px] font-bold md:text-justify text-center">SUMMER 2020</h5>
        </div>
        <div className="pt-6 mt-3">
         <h1 className="md:text-[58px] md:text-justify text-[45px] font-bold text-center">NEW <br className="block md:hidden" /> COLLECTION</h1>
        </div>
        <div className="pt-6 mt-3">
        <h4 className="md:text-[23px] md:text-justify font-base text-center text-[20px]">We know how large objects <br className="block md:hidden" /> will act, <br className="hidden md:block" /> 
      but things on a <br className="block md:hidden" /> small scale.</h4>
        </div>
        <div className="pt-6 mt-2 md:ml-0 ml-[125px] items-center">
        <Link href='/shop'>
        <button className="bg-[#2DC071] py-[15px] px-[40px] rounded-[5px] hover:bg-white hover:text-[#2DC071] hover:px-[45px]">
        <h3 className="text-[20px] font-bold">SHOP NOW</h3>
        </button>
        </Link>
        </div>
      </div>
      </section>
      </Suspense>
      <Suspense>
        <Editorspick />
      </Suspense>
      <Suspense>
        <Bestsellers />
      </Suspense>
      <Suspense>
        <Vitaproducts />
      </Suspense>
      <Suspense>
        <Neuraluniverse />
      </Suspense>
      <Suspense>
        <Featuredposts />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  )
}
