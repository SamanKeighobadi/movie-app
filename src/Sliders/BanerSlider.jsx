import React from "react";
//?Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,Autoplay } from "swiper/core";
import Baner from './Baner'
import images from  './BanerImageData/BanerImageData.json'

//* Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//* Install Swiper modules
SwiperCore.use([Pagination, Navigation,Autoplay]);

const BanerSlider = ({ image, title }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={800}
        autoplay={true}
        
        className="text-center text-white h-96 mb-8"
      >
      {images.map(image => (
        <SwiperSlide key={image.id} >
          <Baner key={image.id} image={image.src} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
};

export default BanerSlider;
