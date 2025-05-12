import React from 'react';
import ProductCard from './ProductCard';

const Card1 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?ga=GA1.1.224570008.1716784742&semt=ais_hybrid&w=740"
        title="IPhone"
        price="$99.99"
      />
    </div>
  );
};

export default Card1;