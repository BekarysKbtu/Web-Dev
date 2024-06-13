import React from 'react';
import ProductItem from './productItem';
import products from './products';

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
