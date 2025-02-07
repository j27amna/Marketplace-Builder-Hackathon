"use client"
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Products } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { eight } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const BestSellerProducts = () => {
  const [product, setProduct] = useState<Products[]>([])

  useEffect(() => {
    async function fetchproduct () {
      try {
        const response = await client.fetch(eight)
        console.log("Fetched products:", response); 
        setProduct(response)
      }
      catch(error) {
        console.error("Failed to fetch products", error);
      }      
    }
    fetchproduct()
  }, [])  
  return (
    <section className="py-[80px] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-center gap-[10px]">
          <h4 className="text-xl font-medium text-[#737373] my-3">Featured Products</h4>
          <h5 className="text-2xl font-bold text-[#252B42] mb-3">BESTSELLER <br className="block md:hidden" /> PRODUCTS</h5>
          <p className="text-sm font-medium text-[#737373] mb-16">Problems trying to resolve the <br className="block md:hidden" /> conflict between trends and quality.</p>
        </div>  
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-[20px] sm:mx-3 sm:mb-5 grid-cols-1 mb-2 mx-14">
          {product.map((product) => (
            <div key={product._id} className="bg-[#FFFFFF] hover:shadow-md overflow-hidden sm:w-[242px] sm:h-[630px] w-[328px] h-[615px] group mb-11 cursor-pointer">
              <div className="relative">
                {product.productImage && (
                  <img
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    className="sm:w-[242px] w-full h-[427px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="px-[25px] pt-[32px] gap-[20px]">
                <h5 className="text-[16px] font-bold text-[#252B42] mb-2">{product.title}</h5>
                <Link href="/items" className="text-sm font-bold mb-4 text-[#737373]">{product.description}</Link>
                <div className="flex items-center px-[25px] pt-[20px] space-x-1">
                  <h5 className="text-[#BDBDBD] font-bold text-[16px] line-through text-center sm:ml-4 ml-14">${product.price.toFixed(2)}</h5>
                  <h5 className="text-[#23856D] font-bold text-[16px] text-center">${product.discountPercentage?.toFixed(2)}</h5>
                </div>
                <div className='flex flex-row items-center px-[30px] py-[15px] gap-[7px]'>
                  <span className='bg-[#23A6F0] w-[16px] h-[16px] rounded-full sm:ml-6 ml-16'></span>
                  <span className='bg-[#23856D] w-[16px] h-[16px] rounded-full'></span>
                  <span className='bg-[#E77C40] w-[16px] h-[16px] rounded-full'></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellerProducts;