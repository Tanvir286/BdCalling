import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from "../../public/assets/Logo.png";
import { FaHeart } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import one from "../../public/assets/product01.png";
import { FaCartPlus } from "react-icons/fa";

const ProductDetails = () => {

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api-fresh-harvest.code-commando.com/api/v1/products/${id}`);
        if (response.data.success) {
          setProduct(response.data.data);
        } else {
          setError('Failed to fetch product details.');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin border-4 border-t-4 border-halkagreen rounded-full w-12 h-12"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white bg-red-600 py-4 px-6 rounded-lg">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Navbar Start */}
      <div className="max-w-container mx-auto py-4 bg-white ">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="w-48" />
          <div className="flex gap-x-16">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-base font-questrial-regular text-black relative group">
                {link.name}
                <span className="absolute inset-x-0 top-5 h-0.5 bg-halkagreen transform -translate-y-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-x-4 text-base font-questrial-regular">
            <div className="flex items-center gap-x-2 cursor-pointer">
              <FaHeart className="text-halkagreen" />
              <p className="text-halkagreen">Favorites</p>
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <IoCartSharp className="text-halkagreen text-xl" />
              <p className="text-halkagreen">Cart</p>
            </div>
            <button className="text-black border border-black px-4 py-2 rounded-xl">Sign in</button>
          </div>
        </div>
      </div>
      <hr />
      {/* Navbar Start */}
     
      {/* Product item start*/}
      <div className='max-w-container mx-auto'>
        <div className='flex gap-x-10 mt-[50px]'>

          <div className='w-[48%]'>
            <img src={product.images?.[0] || 'default_image_path'} alt="" className='w-full border' />
          </div>

          <div className='w-[48%]'>
            <p className='font-rubik-medium text-xl font-medium text-halkagreen px-8 py-2 inline-block bg-halkagreen/10 rounded-xl mb-5'>Fruits</p>
            <h3 className='font-rubik-medium text-5xl text-black1'>{product.productName}</h3>
            <h4 className='font-questrial-regular text-xl text-black2 mt-5'>{product.description}</h4>
            <div className='mt-5'>
                <p className="text-3xl font-bold text-green-600">${product.price && !isNaN(product.price) ? product.price.toFixed(2) : 'N/A'}</p>
                <p className="text-2xl text-gray-500">Stock: {product.stock}</p>
            </div>

             <div className='flex cursor-pointer items-center text-2xl justify-center border gap-x-4 mt-5 py-3 text-orange rounded-xl shadow-xl'>
               <FaCartPlus />   
               <p>Add to cart</p>
            </div>

          </div>

        </div>
      </div>
      {/* Product item end */}
    </div>
  );
};

export default ProductDetails;
