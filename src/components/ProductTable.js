// src/components/ProductTable.js
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>HSN</th>
          <th>Product Name</th>
          <th>Batch</th>
          <th>MRP</th>
          <th>Rate</th>
          <th>Expiry</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>General Name</th>
          <th>Created Date</th>
          <th>Updated Date</th>
          <th>Active</th>
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
            <td>{product.exp}</td>
            <td>{product.quantity}</td>
            <td>{product.category}</td>
            <td>{product.productGeneralName}</td>
            <td>{product.createdDate}</td>
            <td>{product.updatedDate}</td>
            <td>{product.active ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
