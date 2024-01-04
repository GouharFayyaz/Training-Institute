import React from "react";
import "./event.css"
import Img3 from  '../../assets/images/enroll-535x600-e1539945261304.jpg'
export default class Event extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid bg-light py-5">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="container d-flex justify-content-center">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-12 cont4 d-flex flex-column justify-content-around align-items-center py-4">
                                <h2 className="py-3 text-white">Enroll Now</h2>
                                <input type="text" placeholder="Name" className="inp py-2 px-3"/>
                                <input type="text" placeholder="Email" className="inp py-2 px-3"/>
                                <input type="text" placeholder="Mobile Number" className="inp py-2 px-3"/>
                                <input type="text" placeholder="Course Type" className="inp py-2 px-3"/>
                                <button className="btn1 py-2">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="container">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12  own_div ">
                            <img src={Img3} alt="" className="img-fluid own_img" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}