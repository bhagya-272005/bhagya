import React from 'react';
import ProductCard from './ProductCard';

const Card3 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80"
        title="One Plus"
        price="$69.99"
      />
    </div>
  );
};

export default Card3;