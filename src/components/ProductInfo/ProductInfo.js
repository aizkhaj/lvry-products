import { useState, useEffect } from 'react';
import { PlayKitForm } from '../PlayKitForm';
import './ProductInfo.css';

const ProductInfo = ({ title, description, suitableFor, subscriptionName, childName, setChildName, birthDate, setBirthDate }) => {
  return (
    <>
      <h1 className="product-title">{title}</h1>
      <div className="product-meta">
        <ul className="meta-list">
          <li className="item">
            <a id="reviews-link" href="/">20 Reviews</a>
          </li>
          <li className="item">
            {`Suitable for ${suitableFor}`}
          </li>
          <li className="item">
            Part of: <a id="sub-link" href="/">{subscriptionName}</a>
          </li>
        </ul>
      </div>
      <div className="line-break"></div>
      <div className="body">
        <p className="description">
          {description}
        </p>
        <div className="detail">$80/kit, only available in the Play Kit subscription</div>
        <PlayKitForm
          childName={childName}
          setChildName={setChildName}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
        />
      </div>
      <ul className="benefit-list">
        <li className="benefits">Free shipping</li>
        <li className="benefits">Cancel anytime</li>
        <li className="benefits">Satisfaction guaranteed</li>
      </ul>
    </>
  )
};

export default ProductInfo;