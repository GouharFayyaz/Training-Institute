
import React from "react";
import "../Sliders/blog.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Navigation } from "swiper";


export default class Blog extends React.Component{
    render(){
        
        return(
            <>
            <div className="container-fluid py-5 bg-light">
              <p className="para22 text-center ">How We Teach</p>
              <div className="container  bolg py-5">
              <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            width: 400,
            slidesPerView: 1,
            
          },
          480: {
            width: 480,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 1,
          },
          1020: {
            width: 1100,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="bg-light">
        <div className="card  c1  nine bg-light">
  <div className="row  ">
    <div className="col-md-4 eight">
    </div>
    <div className="col-md-8 ">
      <div className="card-body w-100  ">
        <p className="card-title head4">Vocational Counsel</p>
        <p className=" para00">Vocational counselling is a career  focused on helping people who need to find a job. Pretty obvious, obvious right?</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide className="bg-light">
        <div className="card  c1  four bg-light">
  <div className="row  ">
    <div className="col-md-4 three">
    </div>
    <div className="col-md-8 ">
      <div className="card-body w-100  ">
        <p className="card-title head4">Elementary School</p>
        <p className=" para00">Vocational counselling is a career  focused on helping people who need to find a job. Pretty obvious, obvious right?</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide className="bg-light">
        <div className="card  c1  two bg-light">
  <div className="row  ">
    <div className="col-md-4 one">
    </div>
    <div className="col-md-8 ">
      <div className="card-body w-100  ">
        <p className="card-title head4">Student Guidance</p>
        <p className=" para00">Vocational counselling is a career  focused on helping people who need to find a job. Pretty obvious, obvious right?</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
              </div>
            </div>
              </>
        )
    }
}