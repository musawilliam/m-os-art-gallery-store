import React, { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../component/slider.css';


const Slider = () => {
  const slides = [
    {
      name: 'Art 1',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315455/MosArt/kgbghpmkkoxijksz2afm.jpg',
    },
    {
      name: 'Art 2',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315454/MosArt/ueikp8w71lfbox11oizb.jpg',
    },
    {
      name: 'Art 3',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315454/MosArt/oobxgkjwlilx94kmok4c.jpg',
    },
    {
      name: 'Art 4',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315454/MosArt/btekyswernerppg9kxyz.jpg',
    },
    {
      name: 'Art 5',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315454/MosArt/rho9lrvrgruvpdvuf6om.jpg',
    },
    {
      name: 'Art 7',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315454/MosArt/nlafiu3m56pzuway6d91.jpg',
    },
    {
      name: 'Art 8',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315454/MosArt/vccz51qte5zdj62dcxuo.jpg',
    },
    {
      name: 'Art 9',
      description: 'The story of your canvas',
      image: 'https://res.cloudinary.com/creative360/image/upload/v1717315453/MosArt/x6yjvslvqsfgf5tk75zx.jpg',
    },


  ];

  const slideRef = useRef(null);

  const nextSlide = () => {
    const slide = slideRef.current;
    if (slide) {
      const items = slide.querySelectorAll('.item');
      slide.appendChild(items[0]);
    }
  };

  const prevSlide = () => {
    const slide = slideRef.current;
    if (slide) {
      const items = slide.querySelectorAll('.item');
      slide.prepend(items[items.length - 1]);
    }
  };

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
