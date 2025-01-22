import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductTable from '../components/ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    hsn: '',
    productName: '',
    batch: '',
    category: '',
    rate: '',
    mrp: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts(filters);
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Error loading products');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Products</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="hsn"
          placeholder="HSN"
          value={filters.hsn}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={filters.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="batch"
          placeholder="Batch"
          value={filters.batch}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          value={filters.rate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="mrp"
          placeholder="MRP"
          value={filters.mrp}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={filters.quantity}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ProductTable products={products} />}
    </div>
  );
};

export default ProductsPage;
