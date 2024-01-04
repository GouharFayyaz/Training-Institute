import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Sliders/slider2.css"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default class Slider2 extends React.Component {
    render(){
  return (
    <>
    <div className="container-fluid py-2 bg-light">
        <h2 className="head11 text-center">Our Partners</h2>
    </div>
    <div className="container-fluid py-2 bg-light">
    <div className="container slidcont1 bg-light ">
        <div className="row">
      <Swiper
      slidesPerView={5}
        spaceBetween={60}
        slidesPerGroup={1}
        centeredSlides={false
        }
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
            
          },
          // when window width is >= 480px
          480: {
            width: 480,
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1020: {
            width: 1020,
            slidesPerView: 4,
            // spaceBetween: 150
          }
        }}
      >
        <SwiperSlide className="bg-light"><div className="photo"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo1"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo2"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo3"></div></SwiperSlide>
        <SwiperSlide className="bg-light"><div className="photo4"></div></SwiperSlide>

      </Swiper>
      </div>
      </div>
      </div>
    </>
  );
}
}
