import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/images/wine1.png" alt="Wine 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/wine2.png" alt="Wine 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/wine3.png" alt="Wine 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/wine4.png" alt="Wine 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
