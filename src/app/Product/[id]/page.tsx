import { client } from '@/sanity/lib/client';
import React from 'react';
import { Products } from '../../../../types/products';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Link from 'next/link';
import Addinfo from './components/Addinfo';
import Itemsbestseller from './components/Itemsbestseller';
import { Suspense } from 'react';
import Navbar from '@/app/shop/components/Navbar';
import Logos from '@/app/shop/components/Logos';
import Footer from '@/app/components/Footer';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const query = `*[_type == "product" && _id == $id]{
    title, price, description, isNew,
    "image": productImage.asset._ref,
    "id": _id,
  }[0]`;

  const product: Products | null = await client.fetch(query, { id: params.id });

  if (!product) {
    return (
      <div>
        <p className="flex items-center justify-center text-center text-[20px] w-full text-[#252B42]">
          <em>Sorry! This product is not available.</em>
        </p>
      </div>
    );
  }

  console.log('Product ID:', params.id);

  return (
    <div key={params.id}>
      <main>
        <Suspense>
          <Navbar />
        </Suspense>
        <Suspense>
          <section className="px-20 py-6 bg-[#FAFAFA]">
            <div className="flex items-center space-x-2 text-[#BDBDBD] font-bold text-md py-6 gap-3 md:text-start">
              <Link href="/" className="text-[#252B42] hover:underline">
                Home{' '}
              </Link>
              <GrNext />
              <h6 className="hover:text-gray-500">
                <Link href="/shop"> Shop </Link>
              </h6>
            </div>

            <div className="md:flex md:flex-row flex-col mt-6 space-x-8">
              <div key={product.id} className="relative">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={500}
                    height={450}
                    className="w-[500px] h-full object-cover"
                  />
                )}

                {/* Heart Icon - Positioned at the Top Right */}
                <div className="absolute top-3 right-3 bg-opacity-50 bg-[#FFFFFF] px-2 py-2 items-center text-center rounded-full shadow-md cursor-pointer text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="currentColor"
                    className="bi bi-heart text-[34px] text-center items-center px-2 py-2 hover:text-[38px]"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                </div>

                {/* Previous and Next Buttons */}
                <button className="absolute left-2 top-80 font-extrabold text-3xl transform -translate-y-1/2 text-[#FFFFFF] hover:text-gray-400">
                  <GrPrevious />
                </button>
                <button className="absolute right-2 top-80 font-extrabold text-3xl transform -translate-y-1/2 text-[#FFFFFF] hover:text-gray-400">
                  <GrNext />
                </button>
              </div>
              <div className="md:w-1/2 w-screen md:px-6 md:py-0 px-0 py-11">
                <h4 className="text-2xl font-medium text-[#252B42] top-3 my-1">
                  {product.title}
                </h4>

                <div className="flex items-center md:space-x-2 space-x-0 text-xl gap-1 top-12 my-6">
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaRegStar className="text-yellow-500 " />
                  </div>
                  <h6 className="text-[#737373] font-bold text-sm">10 Reviews</h6>
                </div>

                <h3 className="text-2xl font-bold text-[#252B42] my-2">
                  $ {product.price}
                </h3>

                <h6 className="text-[#737373] font-bold text-sm mt-1 mb-8">
                  Fresh Stock{' '}
                  <span className="text-[#23A6F0]">{product.isNew}</span>
                </h6>

                <p className="text-[#565656] text-sm font-medium">
                  {product.description}
                </p>

                <hr className="border-[#BDBDBD] top-[277px] mt-8 mb-7" />

                <div className="flex gap-3 my-11">
                  <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full cursor-pointer"></div>
                  <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full cursor-pointer"></div>
                  <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full cursor-pointer"></div>
                  <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full cursor-pointer"></div>
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <button className="px-[20px] py-[10px] bg-[#23A6F0] text-white rounded-md hover:bg-blue-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Suspense>
        <Suspense>
          <Addinfo />
        </Suspense>
        <Suspense>
          <Itemsbestseller />
        </Suspense>
        <Suspense>
          <Logos />
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Page;
