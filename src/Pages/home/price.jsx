import React, { Component } from 'react'
import "./price.css"
export default class Price extends Component {
  render() {
    return (
        <>
        <div className="container-fluid   py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <h2 className='head88'>PRICING</h2>
                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3  ">
                    <div className="container text-center py-5 rounded border pri ">
                     <h3 className='head'>Starter <br/>$ 10 /Month</h3>
                     <hr className='hr' />
                     <p>One Day Trial</p>
                     <p>Limited Courses</p>
                     <p>Free 3 Lessons</p>
                     <p>No Supporter</p>
                     <p> <del>Pharetra massa</del></p>
                     <p> <del>No Ebook</del> </p>
                     <p> <del>No Tutorial</del> </p>
                     <p> <del>Limited Registered User</del> </p>
                     <hr className="hr" />

                     <button className="py-2 px-4 rounded button2">Purchase Now</button>
                 </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 ">
                    <div className="container text-center py-5 rounded  border pri ">
                        <h3 className='head'>Basic <br/> $ 20 /Month</h3>
                     <hr className='hr' />
                     <p>One Day Standard Access</p>
                     <p>Limited Courses</p>
                     <p>300+ Lessons</p>
                     <p>Random Supporter</p>
                     <p>Nulla at volutpat dola</p>
                     <p> <del>View Only Ebook</del> </p>
                     <p> <del>Standard Tutorials</del> </p>
                     <p> <del>Unlimited Registered User</del> </p>
                     <hr className="hr" />
                     <button className="py-2 px-4 rounded  button2">Purchase Now</button>
                 </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 ">
                    <div className="container text-center py-5 border rounded pri">
                     <h3 className='head'>Premium <br/>$ 30 /Month</h3>
                     <hr className="hr" />
                     <p>Life Time Access</p>
                     <p>Unlimited All Courses</p>
                    <p>3000+ Lessons & Growing</p>
                    <p>Free Supporter</p>
                    <p> <del>Pharetra massa</del> </p>
                    <p> <del>Free Ebook Downloads</del> </p>
                    <p> <del>Premium Tutorials</del> </p>
                    <p> <del>Unlimited Registered User</del> </p>

                    <hr className="hr" />
                    <button className="py-2 px-4 rounded button2">Purchase Now</button>
                </div>
                    </div>
                </div>
            </div>
       
   </div>
</>
    )
  }
}
