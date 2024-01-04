// import { color } from '@mui/system'
import React from 'react'
import "./CardForEvents.css"
import { BsArrowRight } from "react-icons/bs";

export default class CardForEvents extends React.Component {
  render() {
    return (
      <div>
         <div className="card  mt-3 mb-3 card_event_color" style={{width: "21rem"}}>
  <img src={this.props.src} className="card-img-top" alt="..."/>
  <h5 className="card-title ms-3 mt-2 mb-0 "><span className='card_event'>{this.props.title}</span></h5>
  <hr className='mt-3'/>
  {/* <p className='ms-3 '><small> May Tue 2017 @05:00-05:00</small></p> */}
  <small className='ms-3 mb-2'> May Tue 2017 @05:00-05:00</small>
  <div className="card-body mt-0 pt-0">
    <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula mauris ac facilisis [...]</p>
    
    
    <p>     
    <span className='card_event_p'>Get Ivolved <BsArrowRight/>
    </span>
    
    </p>
  </div>
</div>
      </div>
    )
  }
}

