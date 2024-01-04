import React from 'react'
import { Link } from 'react-router-dom'
import "../../component/comingSoon/comingSoon.css"

export default class ComingSoon extends React.Component {
  
  render() {
   
    return (
      <div>   
        <div className="container body">
       <div className="welcome">
  <span id="splash-overlay" className="splash"></span>
  <span id="welcome" className="z-depth-4"></span>

  <header className="navbar-fixed">
    <nav className="row deep-purple darken-3">
      
    </nav>
  </header>

  <main className="valign-wrapper">
    <span className="container grey-text text-lighten-1 ">

      <p className="flow-text">Welcome to Training Institute</p>
      <h1 className="title grey-text text-lighten-3">Coming Soon......</h1>

      <blockquote className="flow-text">A place to learn web-development</blockquote>


    </span>
  </main>

  <div className="fixed-action-btn">
    <Link to="#message" className="modal-trigger btn btn-large btn-floating amber waves-effect waves-light">
      <i className="large material-icons text-warning">Sorry for inconvenience , we are still working on this......</i>
    </Link>
  </div>

  <div id="message" className="modal modal-fixed-footer">
    <div className="modal-content">
      <h4>Contact</h4>
      <p>coming soon...</p>
    </div>
    <div className="modal-footer">
      <Link to="" className="modal-action modal-close waves-effect btn-flat">close</Link>
    </div>
  </div>

  <footer className="page-footer deep-purple darken-3">
    <div className="footer-copyright deep-purple darken-4">
     
    </div>
  </footer>
</div>
      </div>
      </div>
    )
  }
}
