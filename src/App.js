import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  // Function to fetch products from the API
  useEffect(() => {
    // Make sure to replace the URL with your correct API endpoint
    fetch('http://localhost:8080/api/products/search')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false); // Stop loading after receiving the data
      })
      .catch((error) => {
        setError(error.message); // Capture any error
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <div className="App">
      <h1>Product List</h1>
      
      {/* Display loading spinner or text while fetching */}
      {loading && <p>Loading...</p>}

      {/* Display error message if there is an error */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {/* Display the data in a table */}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>HSN</th>
              <th>Product Name</th>
              <th>Batch</th>
              <th>MRP</th>
              <th>Rate</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.hsn}</td>
                <td>{product.productName}</td>
                <td>{product.batch}</td>
                <td>{product.mrp}</td>
                <td>{product.rate}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
