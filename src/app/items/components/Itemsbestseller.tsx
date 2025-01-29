import Link from 'next/link';

const itemsBestSellerProducts = () => {
    const products = [
      { id: 1, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller1.jpg" },
      { id: 2, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller2.jpg" },
      { id: 3, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller3.jpg" },
      { id: 4, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller4.jpg" },
      { id: 5, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller5.jpg" },
      { id: 6, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller6.jpg" },
      { id: 7, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller1.jpg" },
      { id: 8, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/itemsBestSeller2.jpg" },
    ];
  
    return (
      <section className="py-[60px] bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-start gap-[10px]">
          <h3 className="text-2xl font-bold text-[#252B42] mb-3">BESTSELLER PRODUCTS</h3>
          <hr className='border border-[#ECECEC] mt-9 mb-8'/>
          </div>  
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-[15px] sm:mx-3 sm:mb-5 grid-cols-1 mb-2 mx-14">
            {products.map((product) => (
              <div key={product.id} className="bg-[#FFFFFF] hover:shadow-md overflow-hidden sm:w-[242px] sm:h-[442px] w-[328px] h-[589px] group mb-11 cursor-pointer">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="sm:w-[243px] w-full sm:h-[280px] h-[427px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                  <div className="px-[25px] pt-[25px] pb-[35px] gap-[20px] text-start">
                  <h5 className="text-[16px] font-bold text-[#252B42] mb-2">{product.name}</h5>
                  <Link href="#" className="text-sm font-bold mb-4 text-[#737373]">{product.department}</Link>
                    <div className="flex pt-[20px] space-x-1 text-start">
                    <h5 className="text-[#BDBDBD] font-bold text-[16px]">${product.price.toFixed(2)}</h5>
                    <h5 className="text-[#23856D] font-bold text-[16px]">${product.salePrice.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default itemsBestSellerProducts;
  