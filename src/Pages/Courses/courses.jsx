import React, { Component } from 'react'
import "./style.css"
import { BsSearch,BsFillStopwatchFill,BsFillPuzzleFill } from "react-icons/bs";
import { FaSignal,FaUserGraduate} from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import img1 from "../../assets/images/pic7.jpg.jpg"
import img2 from "../../assets/images/pic8.jpg.jpg"
import img3 from "../../assets/images/pic9.jpg.jpg"
import img4 from "../../assets/images/pic10.jpg.jpg"
import img5 from "../../assets/images/pic11.jpg.jpg"
import img6 from "../../assets/images/social-scaled.jpg"



export default class AllCourse extends Component {
  state={
    data:[{url:img1,head1:"Training institute",head2:"Management prog",bar:["10 weeks","All levels","5 lesson","0 Quizzes","25 Students"],para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem…",price:"$95.00"},
    {url:img2,head1:"Training institute",head2:"Javascript Campus",bar:["10 weeks","All levels","5 lesson","0 quiz","14 assignment"],para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem…",price:"200$"},
    {url:img3,head1:"Training institute",head2:"Model Specificity",bar:["10 weeks","All levels","5 lesson","0 quiz","14 assignment"],para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem…",price:"300$"},
    {url:img4,head1:"Training institute",head2:"Sample course",bar:["10 weeks","All levels","5 lesson","0 quiz","14 assignment"],para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem…",price:"free"},
    {url:img5,head1:"Training institute",head2:"Learning Seminar",bar:["10 weeks","All levels","5 lesson","0 quiz","14 assignment"],para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem…",price:"free"},
    {url:img6,head1:"Training institute",head2:"Project Learning",bar:["10 weeks","All levels","5 lesson","0 quiz","14 assignment"],para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem…",price:"100$"}]
  }
  render() {
    return (
      <>
      
      <div className="container  ">
        <div className="row">
          <div className="col-lg-6 pl-5 ">
            <h1 className='py-2 m-0  pl-4' style={{fontSize:"28px",fontWeight:"bold"}}>All Courses</h1>
            </div>
<div className="col-lg-4 d-flex justify-content-center align-items-center ">
<div className="input-group ">
  
  <input style={{borderRight:"none"}} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Search courses...'/>
  <div className="input-group-append  bg-light  ">
    <span className="input-group-text  bg-light " style={{borderLeft:"none",borderBottom:"none"}}>
      <BsSearch/>
    </span>
  </div>
</div>
</div>

        </div>
      </div>




{this.state.data.map(
  (obj)=>{
return (
<div className="container py-2">
<div className="card  mt-4 cardmain d-flex align-items-center" style={{width:"100%"}}>
  <div className="container py-3">
<div className="row g-0 ">
<div className="col-md-4 inputIMG" style={{border:"none"}}>
<img src={obj.url} className="img-fluid rounded-start"  alt="" style={{width:"31rem",height:"45vh",transitionDuration:".5s"}}/>

<div className='oprdiv' style={{height:"100%",width:"100%"}}>
</div>

</div>
<div className="col-lg-7 ml-4">
<div className="card-body">
  <div className="col-12 pb-3"> <span className='training'>{obj.head1}</span> </div>
  <h4 className="card-title  progtitle pl-3">{obj.head2}</h4>
  <div className="row  pl-3 mt-3 mb-2">
    <div className="col-2 ">
      <span className='weeks'> <span style={{color:"orange  " , fontSize:"15px"  }}> <BsFillStopwatchFill/></span> {obj.bar[0]}</span>
    </div>
    <div className="col-2 ">
      <span className='weeks'>  <span className='pr-1'  style={{color:"orange" , fontSize:"15px" }}><FaSignal/></span>{obj.bar[1]} </span>
    </div>
    <div className="col-2 ">
      <span className='weeks'> <span  style={{color:"orange" , fontSize:"15px" }}><HiOutlineDocumentDuplicate/></span> {obj.bar[2]}</span>
    </div>
    <div className="col-2 ">
     <span className='weeks'> <span className='pr-1'    style={{color:"orange" , fontSize:"15px" }}><BsFillPuzzleFill/></span>{obj.bar[3]} </span>
    </div>
    <div className="col-3 ">
      <span className='weeks'> <span  style={{color:"orange" , fontSize:"15px" }}><FaUserGraduate/></span> {obj.bar[4]}</span>
    </div>
 
  </div>
  <p className="card-text ml-3"> <small> {obj.para} </small></p>
  <div className='d-flex justify-content-between align-items-center pt-2 '>
  <p className="card-text ml-3 mt-2" style={{fontWeight:"bold",color:" rgb(20, 19, 19)"}}>{obj.price}</p>
  <button className='px-3 btn py-1'  style={{border:"none",backgroundColor:"#F1B616",borderRadius:"5px",color:"white",height:"30px"}}>View More</button>
  </div>
</div>
</div>
</div>
</div>
</div> 
</div>)
  }
)
}
      </>
      


    )
  }
}
