import React from 'react'
import CardForEvents from '../CardsForEvents/CardForEvents'
import "./Events.css"
import photo1 from "../../../assets/images/photo11.jpg"
import photo2 from "../../../assets/images/photo3.jpg"
import photo3 from "../../../assets/images/photo8.jpg"
import photo4 from "../../../assets/images/photo1.jpg"
import photo5 from "../../../assets/images/photo5.jpg"
import photo6 from "../../../assets/images/photo9.jpg"
import photo7 from "../../../assets/images/photo4.jpg"
import photo8 from "../../../assets/images/photo7.jpg"
import photo9 from "../../../assets/images/photo10.jpg"
import AboutHeader from '../../about/About_header'
// import photo10 from "../images/photo10.jpg"

export default class Events extends React.Component {
  render() {
    return (
        <>
          <AboutHeader data={{p1:"Events",p2:"Homepage >",p3:"Events"}}/>

        <div className="container pt-4 py-4">
            <button className='px-3 py-2 events_btn rounded bbn'>Show Events on Map</button>
        </div>
        <div className="container py-2">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-between flex-wrap ">
                    <CardForEvents title="Boys On Rails" src={photo1}/>
                    <CardForEvents title="Elementary School" src={photo2}/>
                    <CardForEvents title="Student Guidance" src={photo3}/>
                    <CardForEvents title="School Seminar" src={photo4}/>
                    <CardForEvents title="Social Activity" src={photo5}/>
                    <CardForEvents title="Summer Campus" src={photo6}/>
                    <CardForEvents title="Summer Campus" src={photo7}/>
                    {/* <CardForEvents title="Social Activity" src={photo10}/> */}
                    <CardForEvents title="Student Guidance" src={photo8}/>

                    <CardForEvents title="Thought Capabilities" src={photo9}/>
                    {/* <CardForEvents title="Social Activity" src={photo6}/> */}
                    {/* <CardForEvents title="Thought Capabilities" src={photo2}/> */}



                   

                    
               



                {/* <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                <div className="card mt-5" style={{width: "18rem"}}>
  <img title="" src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}



                </div>
            </div>
        </div>
      

      </>
    )
  }
}
