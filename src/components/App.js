import './App.css';
import { useState, useEffect } from 'react';
import { Nav } from './Nav';
import { Carousel } from './Carousel';
import { ProductInfo } from './ProductInfo';
import kitType from '../utils/kitTypeEnum';
import determineKit from '../utils/determineKit';
import data from '../data.json';


function App() {
  const [selectedData, setSelectedData] = useState(data[kitType.LOOKER])
  const [title, setTitle] = useState(selectedData.title);
  const [description, setDescription] = useState(selectedData.description);
  const [suitableFor, setSuitableFor] = useState(selectedData.suitableFor);
  const [subscriptionName, setSubscriptionName] = useState(selectedData.subscriptionName);
  const [images, setImages] = useState(selectedData.images);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="breadcrumbs">
          <p>{`Home > Play Kits > ${title} Play Kit`}</p>
        </div>
        {/* <section> */}
        <Carousel
          images={images}
        />
        {/* </section> */}
        {/* <section> */}
        <ProductInfo
          title={title}
          description={description}
          suitableFor={suitableFor}
          subscriptionName={subscriptionName}
        />
        {/* </section> */}
      </div>
    </>
  );
}

export default App;
