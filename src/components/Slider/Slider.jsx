import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Slider.css';

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/images/wine1.png" alt="Wine 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/wine2.png" alt="Wine 2" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src="/images/wine3.png" alt="Wine 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/wine4.png" alt="Wine 4" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;
