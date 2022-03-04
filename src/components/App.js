import './App.css';
import { useState, useEffect } from 'react';
import { Nav } from './Nav';
import { Carousel } from './Carousel';
import { ProductInfo } from './ProductInfo';
import kitType from '../utils/kitTypeEnum';
import determineKit from '../utils/determineKit';
import data from '../data.json';


function App() {
  const [title, setTitle] = useState(data[kitType.LOOKER].title);
  const [description, setDescription] = useState(data[kitType.LOOKER].description);
  const [suitableFor, setSuitableFor] = useState(data[kitType.LOOKER].suitableFor);
  const [subscriptionName, setSubscriptionName] = useState(data[kitType.LOOKER].subscriptionName);
  const [images, setImages] = useState(data[kitType.LOOKER].images);
  const [birthDate, setBirthDate] = useState(new Date());

  useEffect(() => {
    const kit = determineKit(birthDate);
    const newData = data[kit];
    // setSelectedData(newData);
    setTitle(newData.title);
    setDescription(newData.description);
    setSuitableFor(newData.suitableFor);
    setSubscriptionName(newData.subscription);
    setImages(newData.images);
  }, [birthDate]);

  return (
    <>
      <Nav />
      <div className="breadcrumbs">
        <p>{`Home > Play Kits > ${title} Play Kit`}</p>
      </div>
      <div className="container">
        <section className="images">
          <Carousel
            images={images}
          />
        </section>
        <section className="products">
          <ProductInfo
            title={title}
            description={description}
            suitableFor={suitableFor}
            subscriptionName={subscriptionName}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
          />
        </section>
      </div>
    </>
  );
}

export default App;
