import Link from 'next/link';

const shopProducts = () => {
    const products = [
      { id: 1, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop1.jpg" },
      { id: 2, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop2.jpg" },
      { id: 3, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop3.jpg" },
      { id: 4, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop4.jpg" },
      { id: 5, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop6.jpg" },
      { id: 6, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop7.jpg" },
      { id: 7, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop8.jpg" },
      { id: 8, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop9.jpg" },
      { id: 9, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop10.jpg" },
      { id: 10, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop11.jpg" },
      { id: 11, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop12.jpg" },
      { id: 12, name: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48, colors: ["#FF5733", "#33FF57", "#3357FF", "#FFD700"], image: "/images/shop13.jpg" },

    
    ];
  
    return (
      <section className="py-[80px] bg-[#FFFFFF]">
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-[10px] sm:mx-3 sm:mb-5 grid-cols-1 mb-2 mx-11">
            {products.map((product) => (
              <div key={product.id} className="bg-[#FFFFFF] hover:shadow-md overflow-hidden sm:w-[242px] sm:h-[630px] w-[328px] h-[615px] group mb-11 cursor-pointer">
                <Link href='/items'>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="sm:w-[242] w-full h-[427px] object-cover hover-affect"
                  />
                </div>
                </Link>
                  <div className="px-[25px] pt-[32px] gap-[20px]">
                  <h5 className="text-[16px] font-bold text-[#252B42] mb-2">{product.name}</h5>
                  <Link href="#" className="text-sm font-bold mb-4 text-[#737373]">{product.department}</Link>
                    <div className="flex items-center px-[25px] pt-[20px] space-x-1">
                    <h5 className="text-[#BDBDBD] font-bold text-[16px] text-center sm:ml-4 ml-14">${product.price.toFixed(2)}</h5>
                    <h5 className="text-[#23856D] font-bold text-[16px] text-center">${product.salePrice.toFixed(2)}</h5>
                  </div>
                  <div className='flex flex-row items-center px-[30px] py-[15px] gap-[7px]'>
                    <span className='bg-[#23A6F0] w-[16px] h-[16px] rounded-full sm:ml-6 ml-16'></span>
                    <span className='bg-[#23856D] w-[16px] h-[16px] rounded-full'></span>
                    <span className='bg-[#E77C40] w-[16px] h-[16px] rounded-full'></span>
                    <span className='bg-[#252B42] w-[16px] h-[16px] rounded-full'></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div> 
      </section>
    );
  };
  
  export default shopProducts;
  