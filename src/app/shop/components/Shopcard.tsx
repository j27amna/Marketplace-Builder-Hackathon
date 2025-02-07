"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@sanity/client";
import { urlFor } from "@/sanity/lib/image";
import { Products } from "../../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { addToCart } from "@/app/actions/actions";
import { log } from "console";
import Swal from "sweetalert2";

const client = createClient({
  projectId: "mjzq9m7z",
  dataset: "production",
  useCdn: true,
});

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState<Products[]>([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || undefined;

  useEffect(() => {
    const fetchProducts = async () => {
      let query;
      let params = {};

      if (searchQuery) {
        query = `*[_type == "product" && title match $searchQuery]{
          _id, title, description, price, discountPercentage, productImage
        }`;
        params = { searchQuery: `*${searchQuery}*` };
      } else {
        query = `*[_type == "product"]{
          _id, title, description, price, discountPercentage, productImage
        }`;
      }

      const fetchedProducts = await client.fetch(query, params);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };

    fetchProducts();
  }, [searchQuery]);

  
    useEffect(() => {
      async function fetchproduct () {
        try {
          const response = await client.fetch(allProducts)
          console.log("Fetched products:", response); 
          setProduct(response)
        }
        catch(error) {
          console.error("Failed to fetch products", error);
        }      
      }
      fetchproduct()
    }, [])
    
    const handleAddToCart = (e: React.MouseEvent, product: Products) => {
      e.preventDefault();
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: `${product.title} added to cart`,
        showConfirmButton: false,
      })
      addToCart(product);
    }

  return (
    <section className="py-[80px] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-[30px] sm:mx-3 sm:mb-5 grid-cols-1 mb-2 mx-11">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product : Products) => (
              <Link href={`Product/${product._id}`}>
              <div key={product._id} className="bg-[#FFFFFF] hover:shadow-xl overflow-hidden sm:w-[242px] sm:h-[630px] w-[328px] h-[630px] group mb-11 flex-col justify-center text-center items-center cursor-pointer">
                  <div className="relative">
                    {product.productImage && (
                      <img
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        className="sm:w-[242px] w-full h-[427px] object-cover hover-affect"
                      />
                    )}
                  </div>
                <div className="px-[25px] pt-[32px] gap-[20px]">
                  <h5 className="text-[16px] font-bold text-[#252B42] mt-1">{product.title}</h5>
                  <div className="flex items-center px-[32px] py-3 space-x-2">
                    <h5 className="text-[#23856D] font-bold text-[16px] text-center ml-8">${product.price.toFixed(2)}</h5>
                    <h5 className="text-[#bfdb5a] font-bold text-[16px] text-center"> {product.discountPercentage?.toFixed(2)}</h5>
                  </div>
                  <div>
                    <button className="bg-[#252B42] text-[#FFFFFF] font-bold text-base uppercase my-1 py-[12px] px-[25px] shadow-lg hover:bg-[#FFFFFF] hover:text-[#252b42] transition
                    " onClick={(e) => handleAddToCart(e, product)}>
                      Add To Cart</button>
                  </div>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <p className="text-center justify-center items-center mt-3">No products found for <strong>{searchQuery ? `"${searchQuery}"` : " "}</strong>.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
