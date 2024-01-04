import React from "react";
import "./course.css"
import {FaBars} from "react-icons/fa"
import {BsFillSuitHeartFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
export default class Course extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid  d-flex justify-content-center align-items-center ">
            <h3 className="head1 py-4 ">Our Expertise</h3>
            </div>
            <div className="container py-1">
                <div className="row py-5  ">
                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center flex-column py-4  new">
                        <div className="container bg-light d-flex justify-content-center align-items-center flex-column py-4 cont5 ">
                        <div className="circle bg-light    d-flex justify-content-center align-items-center ">
                            <h2 className="clr ">{<FaBars/>}</h2>
                        </div>
                            <p className="para1 text-center  m-0 p-0 mt-5 py-1">Learn courses online</p>
                            <p className="text-center ">Aliquam erat volutpat. Donec laoreet iaculis elementum. Aliquam ligula nisi, molestie faucibus tortor.</p>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-12 d-flex justify-content-center align-items-center flex-column  py-4 new">
                        <div className="container bg-light py-3 cont5 d-flex justify-content-center align-items-center py-4 flex-column">
                        <div className="circle bg-light    d-flex justify-content-center align-items-center ">
                            <h2 className="clr">{<BsFillSuitHeartFill/>}</h2>
                        </div>
                        <p className="para1 text-center  m-0 p-0 mt-5 py-1">Best industry experts</p>
                            <p className="text-center ">Nunc nec nisi vitae ipsum pharetra tincidunt. Nam vel purus dolor. In iaculis arcu et aliquam dapibus.</p>
                        </div>
                    </div>
                    <div className="col-lg-4  col-md-4 col-sm-12 d-flex justify-content-center align-items-center flex-column py-4 new ">
                        <div className="container bg-light py-3 cont5 d-flex justify-content-center align-items-center py-4 flex-column  ">
                        <div className="circle bg-light    d-flex justify-content-center align-items-center ">
                            <h2 className="clr">{<AiFillSetting/>}</h2>
                        </div>
                        <p className="para1 text-center  m-0 p-0 mt-5 py-1">See our best skills</p>
                            <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat mauris quis volutpat fermentum.</p>

                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}