import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onLeftClick = () => {
    if (selectedIndex !== 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const onRightClick = () => {
    if (selectedIndex !== images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const onSelect = (i) => {
    setSelectedIndex(i);
  }

  return (
    <div className="img-container">
      <img src={images[selectedIndex]} alt="selected" className="img-view" />

      <div className="carousel-list">
        {
          selectedIndex !== 0 ? (
            <button onClick={onLeftClick} className="btn-chevron">
              <FontAwesomeIcon icon={faCircleChevronLeft} size="xl" />
            </button>
          ) : null
        }
        {
          images.map((img, i) => (
            <div className={i === selectedIndex ? "selected-img img-preview" : "img-preview"} onClick={() => onSelect(i)}>
              <img src={img} alt="preview" className="img-preview" key={`i${i}`} />
            </div>
          ))
        }
        {
          selectedIndex !== images.length - 1 ? (
            <button onClick={onRightClick} className="btn-chevron">
              <FontAwesomeIcon icon={faCircleChevronRight} size="xl" />
            </button>
          ) : null
        }
      </div>
    </div>
  )
};

export default Carousel;