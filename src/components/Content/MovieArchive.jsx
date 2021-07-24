import React from "react";
//?Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import images from "../../Sliders/BanerImageData/NewCartData.json";
//* Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//* Install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const MovieArchive = () => {
  return (
    <div className='text-center'>
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
        className="w-64  "
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
              <img className="rounded h-full  " src={image.src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieArchive;
