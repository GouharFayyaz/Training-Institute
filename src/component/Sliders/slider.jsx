import React from "react";

import "./slider.css";
import Img2 from "../../assets/images/slide-img2.png"
import Img3 from "../../assets/images/slide-img1.png"


// import required modules

export default function App() {
  return (
    <>
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img2} className="d-block w-100 hei" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Img3} className="d-block w-100 hei" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
