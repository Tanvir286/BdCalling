import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from "../../public/assets/Logo.png";
import { FaHeart } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import one from "../../public/assets/product01.png";
import { FaCartPlus } from "react-icons/fa";
import SectionHeader from '../component/layout/SectionHeader';
import Footer from '../component/section/Footer';

const ProductDetails = () => {
    const [reviews, setReviews] = useState([
        {
            name: "John Doe",
            rating: 5,
            comment: "This product exceeded my expectations. The quality is top-notch!",
            date: "2024-12-01",
        },
        {
            name: "Jane Smith",
            rating: 4,
            comment: "Good product overall, but I had some issues with the delivery.",
            date: "2024-12-05",
        },
    ]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);  // Ensure product is null initially, not undefined
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-fresh-harvest.code-commando.com/api/v1/products');
                if (response.data.success) {
                    setProducts(response.data.data);
                } else {
                    setError('Failed to fetch products.');
                }
            } catch (err) {
                setError('Failed to fetch products.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Fetch product details by ID
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

    // Fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api-fresh-harvest.code-commando.com/api/v1/category');
                if (response.data.success) {
                    setCategories(response.data.data);
                } else {
                    setError('Failed to fetch categories.');
                }
            } catch (err) {
                setError('Failed to fetch categories.');
                console.error(err);
            }
        };
        fetchCategories();
    }, []);

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

    if (!product) {
        return (
            <div className="text-center text-white py-4 px-6 rounded-lg">
                <p>Product not found or failed to load product details.</p>
            </div>
        );
    }

    const categoryName = categories.find(category => category.id === product.categoryId)?.categoryName || 'Unknown';
    const filteredProducts = products?.filter(p => p.categoryId === product.categoryId);

    return (
        <div>
            {/* Navbar */}
            <div className="max-w-container mx-auto py-4 bg-white">
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
            {/* Navbar end */}
            
            {/* Product item */}
            <div className="max-w-container mx-auto">
                <div className="flex gap-x-10 mt-[50px]">
                    <div className="w-[48%]">
                        <img src={product?.images?.[0] || 'default_image_path'} alt="" className="w-[600px] h-[400px] border" />
                    </div>

                    <div className="w-[48%]">
                        <p className="font-rubik-medium text-xl font-medium text-halkagreen px-8 py-2 inline-block bg-halkagreen/10 rounded-xl mb-5">{categoryName}</p>
                        <h3 className="font-rubik-medium text-5xl text-black1">{product?.productName}</h3>
                        <h4 className="font-questrial-regular text-xl text-black2 mt-5">
                            {product?.description?.split(' ').slice(0, 30).join(' ')}{product?.description?.split(' ').length > 30 && '...'}
                        </h4>

                        <div className="mt-5 flex justify-between items-center">
                            <p className="text-3xl font-bold text-green-600">${product?.price && !isNaN(product?.price) ? product?.price.toFixed(2) : 'N/A'}</p>
                            <p className="text-xl text-gray-500 mr-10 border rounded-full p-2 px-3 bg-slate-100">Stock: {product?.stock}</p>
                        </div>

                        <div className="flex justify-between gap-x-4">
                            <div className="group w-[50%] flex cursor-pointer items-center text-xl justify-center border gap-x-4 mt-5 py-3 rounded-xl shadow-xl hover:bg-orange">
                                <FaCartPlus className="text-black2 group-hover:text-white" />
                                <p className="text-black2 group-hover:text-white">Add to cart</p>
                            </div>

                            <div className="group w-[50%] flex cursor-pointer items-center text-xl justify-center border gap-x-4 mt-5 py-3 rounded-xl shadow-xl hover:bg-orange">
                                <FaHeart className="text-black2 group-hover:text-white" />
                                <p className="text-black2 group-hover:text-white">Save as favorite</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="max-w-container mx-auto mt-10">
                <h3 className="text-xl font-medium text-white px-8 py-2 inline-block bg-halkagreen rounded-xl mb-5">
                    Customer Reviews ({reviews.length})
                </h3>

                <div className="flex flex-col gap-y-8">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md border border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h4 className="font-medium text-lg text-black">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                    <div className="flex">
                                        {Array(review.rating).fill().map((_, i) => (
                                            <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
                                        ))}
                                        {Array(5 - review.rating).fill().map((_, i) => (
                                            <span key={i} className="text-gray-300 text-lg">&#9733;</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-4">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <div  className="max-w-container mx-auto ">
            <div className='text-center my-20'>
                <SectionHeader
                    title="Our Products"
                    subtitle="Related Products"
                    description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
                    desclass="font-questrial-regular text-base text-black2 mx-auto max-w-578"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => {
                            const imagePath = `${product.images?.[0]}`;
                            return (
                                <div key={product.id} className="border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
                                    <img src={imagePath} alt={product.productName} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                                    <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>

                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold text-green-600">${product.price?.toFixed(2)}</p>
                                        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                                    </div>

                                    <button className='font-rubik-regular rounded-lg text-lg text-black1 border w-full py-2 mt-3 hover:bg-orange hover:text-white'>
                                        Add to cart
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-lg">No products available for this category.</p>
                    )}
                </div>
            </div>
            </div>

            

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ProductDetails;
