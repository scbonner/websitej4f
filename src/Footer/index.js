import React from 'react'
import './footer.css'

function Footer() {  
    return (
         <div className="container">
         <footer className="footer">
    <h1>Same height columns in Bootstrap</h1>
    <div className="row row-flex">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-1">
          <h3>CONTACT</h3>
          <p>This one has a bit longer content</p>
          <p>This one has a bit longer content</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-2">
          <h3>DONATE</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-3">
          <h3>FOLLOW US</h3>
          <p>Normal content.</p>
        </div>
      </div>
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-4">
          <h3>Fourth column</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-5">
          <h3>Fifth column</h3>
          <p>Normal content.</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="content colour-6">
          <h3>Sixth column</h3>
          <p>Normal content.</p> */}
        </div>
      
    
    
    {/* <p className="text-muted">This pen is a part of the <a href="https://bootstrapious.com/p/bootstrap-tips-and-tricks" target="_blank">Bootstrap tips and tricks article</a></p> */}
    
  </footer>
  </div>


            

    
    )
}

export default Footer
