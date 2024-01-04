import React from "react";
import "./page.css"
// import ShakaPlayer from 'shaka-player-react';
// import "shaka-player-react/dist/controls.css"
import ReactPlayer from "react-player/youtube";
export default class Page extends React.Component{
    render(){
        return(
            <>
            <div className="containerr-fluid cont7 py-5 max">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6  col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center ">
                        <div className="main">
                        <ReactPlayer className="react-player " controls url="https://www.youtube.com/watch?v=8mb-0qbq984&t=1s" width="100%" ></ReactPlayer>
                    </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 py-4 ">
                    <div className="main mini">
                        <h2 className="text-white ">Daily Life Of Studying At Training <br /> Institute</h2>
                        <p className="text-white">Nam cursus imperdiet elit. Fusce sollicitudin eget nulla in  <br /> condimentum. Nullam dignissim id magna non tempus. <br /> Vivamus molestie nulla nec pharetra dignissim. Suspendisse  <br /> auctor nisi et neque vehicula pulvinar. Quisque quis tempus  <br /> magna. Quisque sed luctus nunc sapien.</p>
                        <button className="text-white py-1 px-3 tbn">See More</button>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}