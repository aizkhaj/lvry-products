import { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onLeftClick = () => {
    if (selectedIndex !== 0) {
      setSelectedIndex(selectedIndex -= 1);
    }
  };

  const onRightClick = () => {
    if (selectedIndex !== images.length - 1) {
      setSelectedIndex(selectedIndex += 1);
    }
  };

  // useEffect(() => {
  //   //
  // }, [selectedIndex])

  return (
    <>
      <img src={images[selectedIndex]} alt="selected" className="img-view" />

      <div className="carousel-list">
        <button onClick={onLeftClick}>
          left
        </button>
        {
          images.map((img, i) => (
            <div className={i === selectedIndex ? "selected-img" : "img-preview"}>
              <img src={img} alt="preview" className="img-preview" />
            </div>
          ))
        }
        <button onClick={onRightClick}>
          right
        </button>
      </div>
    </>
  )
};

export default Carousel;