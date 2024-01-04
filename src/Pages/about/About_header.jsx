import React, { Component } from 'react'
import "./style.css"

export default class About_header extends Component {
  render() {
    return (
      <div>
             <div className='container-fluid about_cont'>
              <div className="container py-5">
                  <div className="row py-5 d-flex justify-content-between ">
                      <div className="col-lg-5 ">
                          <h3 className='py-2'>{this.props.data.p1}</h3>
                      </div>
                      <div className="col-lg-3  ">
                          <p className='p-0 m-0 in  px-4'>{this.props.data.p2} <span style={{color:"orange"}}>{this.props.data.p3}</span> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
