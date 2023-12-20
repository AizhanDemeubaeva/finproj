import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  function fetchProducts() {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log(error));
  }
  
  function fetchCategories() {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.log(error));
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter function
  const filteredProducts = products.filter(item => {
    const categoryMatch = selectedCategory === '' || item.category.id === parseInt(selectedCategory);
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  document.title = "Main page";

  return (
    <>
      <Hero />

      <hr />

      <div className="container">
        <p class="display-5 text-center mt-5 mb-4">Products</p>
        <div className='d-flex justify-content-around align-items-center mb-4'>
          <div className="dropdown-with-icon">
            <select 
              className="form-select" 
              onChange={handleCategoryChange} 
              value={selectedCategory}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            <i className="bi bi-chevron-down"></i>
          </div>
          
          <div style={{width: 1000}}>
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <p></p>
          </div>
        </div>
       
        <div className="row" id='shop'>
          {filteredProducts.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
