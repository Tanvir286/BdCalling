import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SectionHeader from '../layout/SectionHeader';
import Button from '../layout/Button';

const OurShop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(6); 
  const [showAll, setShowAll] = useState(false);

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

  const handleCategoryClick = (category) => {
    if (category.name === 'All') {
      setActiveCategory('All');
      setSelectedCategoryId(null);
    } else {
      setActiveCategory(category.categoryName);
      setSelectedCategoryId(category.id);
    }
  };

  const filteredProducts = selectedCategoryId
    ? products.filter((product) => product.categoryId === selectedCategoryId)
    : products;

  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, limit);

  const handleSeeAllClick = () => {
    setShowAll(true);
    setLimit(filteredProducts.length); 
  };

  const handleLessClick = () => {
    setShowAll(false);
    setLimit(6); 
  };

  return (
    <div className='max-w-container mx-auto pb-20'>
      <div className='flex justify-center mt-5 gap-x-5'>
        <a
          href="#"
          onClick={() => handleCategoryClick({ name: 'All', id: null })}
          className={`text-lg px-6 py-3 rounded-lg ${activeCategory === 'All' ? 'bg-halkagreen text-white' : 'text-black3 border-2'}`}
        >
          All
        </a>

        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            onClick={() => handleCategoryClick(category)}
            className={`text-lg px-6 py-3 rounded-lg ${activeCategory === category.categoryName ? 'bg-halkagreen text-white' : 'text-black3 border-2'}`}
          >
            {category.categoryName}
          </a>
        ))}
      </div>

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

                  <button className='font-rubik-regular text-lg text-black1 border w-full py-2 mt-3 hover:bg-orange hover:text-white rounded-lg'>
                    Add to cart
                  </button>

                  {/* Here is the key part where we replace the <button> around the <Link> */}
                  <Link
                    to={`/product/${product.id}`}
                    className='font-rubik-regular text-lg inline-block text-center text-black1 border w-full py-2 mt-3 hover:bg-slate-400 hover:text-white rounded-lg'
                  >
                    View Details
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="text-center text-lg">No products available for this category.</p>
          )}
        </div>
      )}
       {/* button Start */}
      <div className='text-center mt-6'>
        {!showAll ? (
          <Button text="See All Products" onClick={handleSeeAllClick} />
        ) : (
          <Button text="Less" onClick={handleLessClick} />
        )}
      </div>
      {/* button End */}
    </div>
  );
};

export default OurShop;
