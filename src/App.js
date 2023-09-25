import React from 'react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {

  const product = [
    "img_1",
    "img_2",
    "img_3",
    "img_4",
    "img_5"
  ]

  return (
    <div className="container">
        <div className="title">
            <h1>Simple Image Carousel</h1>
            <p>5 x Image items<span> ❖ Carousel</span></p>
            <p>Interactive Components & Variants</p>
        </div>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5
          }}
         navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          clickable: true
         }}
         pagination={{
            el: ".swiper-pagination",
            clickable: true
         }}
        className='swiper_container'
      >
        {
          product.map(item => (
            <SwiperSlide key={item.key}>
              <img src={`images/${item}.jpg`} alt={`${item}`} />
            </SwiperSlide>
          ))
        }
        <div className='slider-controler'>
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
