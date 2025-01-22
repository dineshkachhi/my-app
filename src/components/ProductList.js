// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
