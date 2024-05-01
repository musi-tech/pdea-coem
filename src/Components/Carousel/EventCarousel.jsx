import React, { useState } from 'react';
import '../Carousel/EventCarousel.css';

const EventCarousel = () => {
  const [items, setItems] = useState([
    { id: 1, imgUrl: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { id: 2, imgUrl: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { id: 3, imgUrl: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { id: 4, imgUrl: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { id: 5, imgUrl: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" },
    { id: 6, imgUrl: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!" }
  ]);

  const handleNextClick = () => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      updatedItems.push(firstItem);
      return updatedItems;
    });
  };

  const handlePrevClick = () => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
      return updatedItems;
    });
  };

  return (
    <>
      {/* Font Awesome CDN */}

      <div className="container">
        <div className="slide">
          {items.map(item => (
            <div key={item.id} className="item" style={{ backgroundImage: `url(${item.imgUrl})` }}>
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.des}</div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={handlePrevClick}>
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button className="next" onClick={handleNextClick}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      
    </>
  );
};

export default EventCarousel;
