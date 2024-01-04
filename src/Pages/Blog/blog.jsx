import React from 'react';
import BlogImg from "../../assets/images/blog1.jpg"
import AboutHeader from '../about/About_header';
import "../../Pages/Blog/blog.css"

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <AboutHeader data={{p1:"Are Our Teachers Really",p2:"Homepage > Leadership Academy >",p3:"Are our teachers really"}}/>
     
          <div className="container mt-5">
              <img src={BlogImg} alt="" className='img-fluid'/>
          </div>
          <div className="container">
              <h2 className='mt-3'> Are our teachers really</h2>
              <p className='mb-5'>Iaculis laoreet penatibus aliquam penatibus ac id ut tortor massa. At vestibulum mattis velit placerat mattis blandit diam. Morbi lectus risus curabitur ante nam.Ultricies. Arcu dapibus praesent est nunc bibendum ridiculus tellus. Aliquet rutrum mauris augue ac. Fringilla at suspendisse netus rhoncus nam curabitur.</p>
              <h2>Leave a Reply</h2>
              <p className='mt-3'>Your email address will not be published. Required fields are marked *</p>
          </div>
          <div className="mb-3 container">
  <input type="text" className="form-control pb-5" id="exampleFormControlInput1" placeholder="Comments"/>
  <div className="mb-3 row d-flex justify-content-between">
      <div className="col-lg-4 col-md-4 col-sm-12 col-12">

      
  <input type="text" className="form-control mt-4 w-100 " id="exampleFormControlInput1" placeholder="Your Name"/>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
  <input type="email" className="form-control mt-4 w-100" id="exampleFormControlInput1" placeholder="Your Email"/>

  </div>
  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
  <input type="text" className="form-control mt-4 w-100" id="exampleFormControlInput1" placeholder="Website URL"/>

  </div>
  <div className="container">
  <div className="mb-3 form-check  mt-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1"><b>Save my name, email, and website in this browser for the next time I comment.</b> </label>
    </div>
    <button className='button1 rounded'>Post Comment</button>
  </div>

</div>
</div>

        
      </div>
    )
  }
}
