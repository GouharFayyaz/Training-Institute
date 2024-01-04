import React, { Component } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default class About_header extends Component {
  render() {
    return (
      <div>
             <div className='container-fluid about_cont'>
              <div className="container py-5">
                  <div className="row py-5 d-flex justify-content-between">
                      <div className="col-lg-3 ">
                          <h3 className='py-2'>About Us</h3>
                      </div>
                      <div className="col-lg-2">
                          <p><Link to="/">Home</Link> <span style={{color:"orange"}}> About Us</span> </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
