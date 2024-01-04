import React, { Component } from 'react'
import "./style.css"
import AboutHeader from './About_header'
import ReactPlayer from "react-player/youtube";
import Join from '../../component/Counter/joinus';
import Course from "../home/courses"
export default class About extends Component {
  render() {
    return (
      <div>
         
          <AboutHeader data={{p1:"About Us",p2:"Homepage >",p3:"About Us"}}/>
          {/* <Page/> */}
          <div className="container-fluid py-3">
          <div className="containerr-fluid  py-5 max">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6  col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center ">
                        <div className="main ">
                        <ReactPlayer className="react-player " controls url="https://www.youtube.com/watch?v=8mb-0qbq984&t=1s" width="100%" ></ReactPlayer>
                    </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 py-4 ">
                    <div className="main mini wah">
                        <h2 className=" ">About The Training Institute</h2>
                        <p className="">Nam cursus imperdiet elit. Fusce sollicitudin eget nulla in condimentum. Nullam dignissim id magna non tempus. Vivamus molestie nulla nec pharetra dignissim. Suspendisse auctor nisi et neque vehicula pulvinar. Quisque quis tempus magna. Quisque sed luctus nunc sapien.Wam cursus imperdiet elit. Fusce sollicitudin eget nulla in condimentum. Nullam dignissim id magna non tempus. Vivamus molestie nulla nec pharetra dignissim. Suspendisse auctor nisi et neque vehicula pulvinar. Quisque quis tempus magna. Quisque sed luctus nunc sapien.</p>
                    </div>
                    </div>
                </div>
            </div>
          </div>
            <Course/>
          <div className="container-fluid">
              <div className="container ">
                 <div className="row">
                 <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-5 pb-5">
                  <div className="card d-flex justif-content-center align-items-center about_card" style={{width: "18rem",border:"none",borderRadius:"1px "}}>
                      <div style={{width:"90%",height:"39.2vh",position:"relative"}} className="mt-3">
                        <div className="about_img1">

                        </div>
                      </div>
                        <div className="card-body d-flex justify-content-center align-items-center flex-column">
                            <h5 className="card-title text-center mb-0 about_head1" >Anna Blown</h5>
                            <h6 className="card-text text-center  mb-0 mt-2 about_head2">English Teacher</h6>
                            <p className="card-text text-center mt-2" style={{fontSize:"14px",color:"gray"}}>She charms of pleasure of the moment, so blinded by desire foresee.</p>

                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-5 pb-5">
                  <div className="card d-flex justif-content-center align-items-center about_card" style={{width: "18rem",border:"none",borderRadius:"1px "}}>
                      <div style={{width:"90%",height:"39.2vh",position:"relative"}} className="mt-3">
                        <div className="about_img2">

                        </div>
                      </div>
                        <div className="card-body d-flex justify-content-center align-items-center flex-column">
                            <h5 className="card-title text-center mb-0 about_head1" >Front Profile</h5>
                            <h6 className="card-text text-center  mb-0 mt-2 about_head2">Sports Teacher</h6>
                            <p className="card-text text-center mt-2" style={{fontSize:"14px",color:"gray"}}>She charms of pleasure of the moment, so blinded by desire foresee.</p>

                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-5 pb-5">
                  <div className="card d-flex justif-content-center align-items-center about_card" style={{width: "18rem",border:"none",borderRadius:"1px "}}>
                      <div style={{width:"90%",height:"39.2vh",position:"relative"}} className="mt-3">
                        <div className="about_img3">

                        </div>
                      </div>
                        <div className="card-body d-flex justify-content-center align-items-center flex-column">
                            <h5 className="card-title text-center mb-0 about_head1" >Sarah Silvester</h5>
                            <h6 className="card-text text-center  mb-0 mt-2 about_head2">Dance Teacher</h6>
                            <p className="card-text text-center mt-2" style={{fontSize:"14px",color:"gray"}}>She charms of pleasure of the moment, so blinded by desire foresee.</p>

                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 c pt-5 pb-5">
                  <div className="card d-flex justif-content-center align-items-center about_card" style={{width: "18rem",border:"none",borderRadius:"1px "}}>
                      <div style={{width:"90%",height:"39.2vh",position:"relative"}} className="mt-3">
                        <div className="about_img4">

                        </div>
                      </div>
                        <div className="card-body d-flex justify-content-center align-items-center flex-column">
                            <h5 className="card-title text-center mb-0 about_head1" >Scott Again</h5>
                            <h6 className="card-text text-center  mb-0 mt-2 about_head2">Maths Teacher</h6>
                            <p className="card-text text-center mt-2" style={{fontSize:"14px",color:"gray"}}>She charms of pleasure of the moment, so blinded by desire foresee.</p>

                        </div>
                    </div>
                  </div>
                 </div>
                  
              </div>
          </div>
          <div className="container-fluid py-2">
          <Join/>
          </div>
      </div>
    )
  }
}