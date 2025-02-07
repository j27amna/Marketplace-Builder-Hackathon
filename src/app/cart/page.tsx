"use client"
import Swal from 'sweetalert2';
import { getCartItems, removeFromCart, updateCart } from '../actions/actions';
import { Products } from './../../../types/products'
import React, { useEffect, useState } from 'react'
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';


const Cartpage = () => {
  const [cartItems , setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  const handleRemove = (product: Products) => {
    Swal.fire({
      title: 'Are you sure you want to remove this item?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      confirmButtonColor: '#252b42',
      cancelButtonColor: '#737373',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(product);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Your item has been removed.', 'success');
      }
    })
  }

  const handleCheckout = (id : string, quantity : number) => {
    updateCart(id, quantity);
    setCartItems(getCartItems());
  }

  const handleAddition = (id : string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product) {
      handleCheckout(id, product.inventory + 1);
    }
  }

  const handleDecreament = (id : string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product  && product.inventory > product.inventory) {
      handleCheckout(id, product.inventory - 1);
    }
  }

  const Total = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);

  }

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: 'Are you sure you want to proceed to checkout?',
      text: 'You will be redirected to the checkout page!',
      icon: 'question',
      showCancelButton: true,
        confirmButtonColor: '#252b42',
        cancelButtonColor: '#737373',
        confirmButtonText: `Proceed`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Proceeding!', 'You are being redirected to the checkout page', 'success');
            router.push('/checkout');
            setCartItems([]);
        }
        })
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-8">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#252b42] mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-[#737373]">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md border border-[#e0e0e0]"
            >
             <div className="flex items-center space-x-4 row-span-2">
                 {item.productImage && (
                    <img
                src={urlFor(item.productImage).url()}
                className="w-20 h-20 object-cover rounded-lg"
                alt={item.title}
                width={200}
                height={200} /> 
                )}
                  <div>
                    <h2 className="text-lg font-semibold text-[#252b42]">{item.title}</h2>
                    <p className="text-sm text-[#737373]">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex row-span-4 items-center space-x-4 mt-4 md:mt-0">
                  <button
                    onClick={() => handleDecreament(item._id)}
                    className="w-8 h-8 flex items-center justify-center font-extrabold text-2xl pb-1 bg-[#23A6F0] text-white rounded-full hover:bg-[#23856D] transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg text-[#252b42]">{item.inventory}</span>
                  <button
                    onClick={() => handleAddition(item._id)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-2xl p-1 bg-[#23A6F0] text-white rounded-full hover:bg-[#23856D] transition-colors"
                  >
                     +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="mt-4 md:mt-0 text-sm text-[#737373] hover:text-[#252b42] transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-white p-6 rounded-lg shadow-md border border-[#e0e0e0]">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#252b42]">Total</h2>
                <p className="text-xl font-bold text-[#252b42]">${Total().toFixed(2)}</p>
              </div>

              <button
                onClick={handleProceed}
                className="w-full mt-6 py-3 bg-[#23A6F0] text-white rounded-lg hover:bg-[#23856D] transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>    
  )
}

export default Cartpage;
