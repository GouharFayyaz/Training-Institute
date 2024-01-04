import React from "react";
import "./join.css"
import NumberCounter from "number-counter"
export default class Join extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid py-2">
                <div className="row py-2">
                <h2 className="text-center py-3 head9">Why You Choose Us</h2>
                </div>
                </div>
                <div className="container py-2">
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column py-2 ">
                            <h2 className="head8 py-1"><NumberCounter start={0}  end={2600}></NumberCounter></h2>
                            <p className="para8 p-0 m-0">Students Successive</p>
                            <p className="text-center para9 p-0 m-0 ">Throughout these year we have done amazing work with 250 students..</p>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column py-2">
                    <h2 className="head8 py-1"><NumberCounter start={2600} end={5000}></NumberCounter></h2>
                            <p className="para8 p-0 m-0">Students Successive</p>
                            <p className="text-center para9 p-0 m-0">Throughout these year we have done amazing work with 250 students..</p>
                    </div>
                    <div className="col-lg-4  d-flex justify-content-center align-items-center flex-column py-2">
                    <h2 className="head8 py-1"><NumberCounter start={5200}  end={7500}></NumberCounter></h2>
                            <p className="para8 p-0 m-0">Students Successive</p>
                            <p className="text-center para9 p-0 m-0">Throughout these year we have done amazing work with 250 students..</p>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}