import React, { useState } from 'react';

export default function ProductCard({ product }) {
  if (!product) return <div>No Product</div>;

  return (
    <div className="card">

      {product.images && product.images.length > 0 && (
        <img
          src={product.images[0]}
          className="card-img-top"
          alt={product.title}
          style={{ cursor: 'pointer' }}
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Category: {product.category.name}</p>
      </div>
    </div>
  );
}
