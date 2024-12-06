import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionHeader from '../layout/SectionHeader';
import Button from '../layout/Button';

const OurProduct = () => {

    /*=======State to track the active category====*/
    const [activeCategory, setActiveCategory] = useState('All');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [selectedCategoryId, setSelectedCategoryId] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(6); // State to track the number of products to display
    const [showAll, setShowAll] = useState(false); // State to track if "See All" has been clicked

    console.log(products);

    /*============Fetching products=============*/
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-fresh-harvest.code-commando.com/api/v1/products');
                if (response.data.success) {
                    setProducts(response.data.data); // Update state with the fetched products
                } else {
                    setError('Failed to fetch products.');
                }
            } catch (err) {
                setError('Failed to fetch products.');
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false after fetching is done
            }
        };

        fetchProducts();
    }, []);
    /*============Fetching products=============*/


    /*============Fetching categories=============*/
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://api-fresh-harvest.code-commando.com/api/v1/category');
                if (response.data.success) {
                    setCategories(response.data.data); // Update state with the fetched categories
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
    /*============Fetching categories=============*/


    /*========Function to handle category selection========*/
    const handleCategoryClick = (category) => {
        if (category.name === 'All') {
            setActiveCategory('All');
            setSelectedCategoryId(null); 
        } else {
            setActiveCategory(category.categoryName); 
            setSelectedCategoryId(category.id); 
        }
    };
    /*========Function to handle category selection========*/


    /*==========Filter products based on selected category=======*/
    const filteredProducts = selectedCategoryId
        ? products.filter((product) => product.categoryId === selectedCategoryId)
        : products;

    /*==========Limit the products shown based on "limit" state=======*/
    const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, limit);
    /*==========Limit the products shown based on "limit" state=======*/

    /*========Handle "See All" button click========*/
    const handleSeeAllClick = () => {
        setShowAll(true);
        setLimit(filteredProducts.length); // Show all products when "See All" is clicked
    };

    /*========Handle "Less" button click========*/
    const handleLessClick = () => {
        setShowAll(false);
        setLimit(6); // Reset limit to show only 8 products when "Less" is clicked
    };
    /*========Handle "Less" button click========*/


    return (
        <div className='max-w-container mx-auto pt-120 pb-20'>
            {/*==========Header Part start================== */}
            <div className='text-center'>
                <SectionHeader
                    title="Our Products"
                    subtitle="Our Fresh Products"
                    description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
                    desclass="font-questriasl-regular text-base text-black2 mx-auto max-w-578"
                />
            </div>
            {/* ==========Header Part end ==============*/}

            {/* =============Category Buttons start =======*/}
            <div className='flex justify-center mt-5 gap-x-5'>
                <a
                    href="#"
                    onClick={() => handleCategoryClick({ name: 'All', id: null })}
                    className={`text-lg px-6 py-3 rounded-lg ${activeCategory === 'All' ? 'bg-halkagreen text-white' : 'text-black3 border-2'}`}
                >
                    All
                </a>

                {categories.map((category) => {
                    return (
                        <a
                            key={category.id}
                            href="#"
                            onClick={() => handleCategoryClick(category)}
                            className={`text-lg px-6 py-3 rounded-lg ${activeCategory === category.categoryName ? 'bg-halkagreen text-white' : 'text-black3 border-2'}`}
                        >
                            {category.categoryName}
                        </a>
                    );
                })}
            </div>
            {/*========= Category Buttons  end============= */}

            {/* Error and Loading states */}
            {loading ? (
                <div className="text-center text-lg">Loading products...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {productsToShow.length > 0 ? (
                        productsToShow.map((product) => {
                            const imagePath = `${product.images?.[0]}`;
                            return (
                                <div
                                    key={product.id}
                                    className="border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
                                >
                                    <img
                                        src={imagePath}
                                        alt={product.productName}
                                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    />
                                    <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>

                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-bold text-green-600">
                                            ${product.price?.toFixed(2)}
                                        </p>
                                        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                                    </div>

                                    <button className='font-rubik-regular text-lg text-black1 border w-full py-2 mt-3 hover:bg-orange hover:text-white'>
                                        Add to cart
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-lg">No products available for this category.</p>
                    )}
                </div>
            )}

            {/* Button to see all or less products */}
            <div className='text-center mt-6'>
                {!showAll ? (
                    <Button text="See All Products" onClick={handleSeeAllClick} />
                ) : (
                    <Button text="Less" onClick={handleLessClick} />
                )}
            </div>
            {/* Button to see all or less products */} 
        </div>
    );
};

export default OurProduct;
