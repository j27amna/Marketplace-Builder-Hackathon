"use client";
import React, { useEffect, useState } from 'react'
import { Products } from '../../../types/products';
import { getCartItems } from '../actions/actions';
import Link from 'next/link';
import { CgChevronRight } from 'react-icons/cg';
import { urlFor } from '@/sanity/lib/image';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

const Checkout = () => {
    const[cartItems, setCartItems] = useState<Products[]>([]);
    const [discountPercentage, setDiscountPercentage] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        address: '',
        city: '',
        province: '',
        zip: '',
        country: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstname: false,
        lastname: false,
        contact: false,
        email: false,
        address: false,
        city: false,
        province: false,
        zip: false,
        country: false,
    });

    useEffect(() => {
        const items = getCartItems();
        setCartItems(items || []);
        const appliedDiscount = localStorage.getItem('discount');
        if (appliedDiscount) {
            setDiscountPercentage(Number(appliedDiscount));
        }
    }, []);

    const Total = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    const discount = (Total * discountPercentage) / 100;
    const total = Math.max(Total - discount, 0);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        })
    }

    const validateForm = () => {
        const errors = {
            firstname: !formValues.firstname,
            lastname: !formValues.lastname,
            contact: !formValues.contact,
            email: !formValues.email,
            address: !formValues.address,
            city: !formValues.city,
            province: !formValues.province,
            zip: !formValues.zip,
            country: !formValues.country,
        };
        setFormErrors(errors);

        return Object.values(errors).every((error) => !error);
    }

    const handleSubmit = async () => {

        Swal.fire({
            title: 'Confirm Order',
            text: 'Please confirm your order.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#252b42',
            cancelButtonColor: '#737373',
            confirmButtonText: 'Place Order',
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (validateForm()) {
                    localStorage.removeItem('cart');
                    Swal.fire('Order Placed!', 'Your order has been placed successfully.', 'success');

                    const orderData = {
                        _type : 'order',
                        firstname : formValues.firstname,
                        lastname : formValues.lastname,
                        contact : formValues.contact,
                        email : formValues.email,
                        address : formValues.address,
                        city : formValues.city,
                        province : formValues.province,
                        zip : formValues.zip,
                        country : formValues.country,
                        cartItems : cartItems.map(item => ({
                            _key: crypto.randomUUID(),
                            _type : 'reference',
                            _ref : item._id,
                        })),
                        total : total,
                        discount : discount,
                        orderDate : new Date().toISOString(),
                    };
                    try {
                        await client.create(orderData);
                        localStorage.removeItem('cart');
                    } catch (error) {
                        console.error('Failed to place order', error);
                    }
                
                } else {
                    Swal.fire('Error!', 'Please fill in all the required fields.', 'error');
                }
            }
    })

}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.productImage && (
                      <img
                        src={urlFor(item.productImage).url()}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Total: <span className="font-medium">${Total}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${Total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  placeholder="Enter your first name"
                  type='text'
                  value={formValues.firstname}
                  onChange={handleInputChange}
                  className="mt-2 w-full border p-2 rounded-md"
                />
                {formErrors.firstname && (
                  <p className="text-sm text-red-500">
                    First name is required.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastname">Last Name </label>
                <input
                  id="lastname"
                  placeholder="Enter your last name"
                  type='text'
                  value={formValues.lastname}
                  onChange={handleInputChange}
                  className="mt-2 w-full border p-2 rounded-md"
                />
                {formErrors.lastname && (
                  <p className="text-sm text-red-500">
                    Last name is required.
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address">Address :</label>
              <input
                id="address"
                placeholder="Enter your address"
                type='address'
                value={formValues.address}
                onChange={handleInputChange}
                className='ml-2 w-full border p-2 rounded-md'
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">Address is required.</p>
              )}
            </div>
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
              <label htmlFor="city">City :</label>
              <input
                id="city"
                placeholder="Enter your city"
                type='text'
                value={formValues.city}
                onChange={handleInputChange}
                className='ml-2 w-full border p-2 rounded-md'
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zip">Zip Code :</label>
              <input
                id="zip"
                placeholder="Enter your zip code"
                type='number'
                value={formValues.zip}
                onChange={handleInputChange}
                className='ml-2 w-full border p-2 rounded-md'
              />
              {formErrors.zip && (
                <p className="text-sm text-red-500">Zip Code is required.</p>
              )}
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
              <label htmlFor="province">Province :</label>
              <input
                id="province"
                placeholder="Enter your province"
                type='text'
                value={formValues.province}
                onChange={handleInputChange}
                className='ml-2 w-full border p-2 rounded-md'
              />
              {formErrors.city && (
                <p className="text-sm text-red-500">Province is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="country">Country :</label>
              <input
                id="country"
                placeholder="Your country"
                type='text'
                value={formValues.country}
                onChange={handleInputChange}
                className='ml-2 w-full border p-2 rounded-md'
              />
              {formErrors.zip && (
                <p className="text-sm text-red-500">Country is required.</p>
              )}
            </div>
            </div>
            <div>
              <label htmlFor="contact">Phone :</label>
              <input
                id="contact"
                placeholder="Enter your phone number"
                type='phone'
                value={formValues.contact}
                onChange={handleInputChange}
                className='ml-2 w-full border p-2 rounded-md'
              />
              {formErrors.contact && (
                <p className="text-sm text-red-500">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                id="email"
                placeholder="Enter your email address"
                type='email'
                value={formValues.email}
                onChange={handleInputChange}
                className='mt-2 mb-8 w-full border p-2 rounded-md'
              />
              {formErrors.email && (
                <p className="text-sm text-red-500">Email is required.</p>
              )}
            </div>
            <button
              className="w-full h-10 bg-[#252b42] hover:bg-[#23856D] text-white"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout;
