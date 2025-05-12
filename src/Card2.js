import React from 'react';
import ProductCard from './ProductCard';

const Card2 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?ga=GA1.1.224570008.1716784742&semt=ais_hybrid&w=740"
        title="Vivo T2 Pro"
        price="$89.99"
      />
    </div>
  );
};

export default Card2;