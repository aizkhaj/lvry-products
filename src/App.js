import './App.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import PlayKitForm from './PlayKitForm';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <ProductInfo />
      <PlayKitForm />
    </>
  );
}

export default App;
