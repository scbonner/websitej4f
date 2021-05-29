import React from 'react'
//import '../Logo/index'
import 'bootstrap/dist/css/bootstrap.css';
import './jumbotron.css'
//import './Logo/logo.png'



function Jumbotron() {
    return (


<div className='container'>
   
{/* <div className="app">
        <br />
        <br />
        <img src={logo} height={100} width={300} alt='...'></img>
    </div> */}

<div className="jumbotron jumbotron-fluid bg-white">
<div className='container'>
  <div className="container"> 
    <div className="row">
      <div className="col-lg-6">
      <img src="https://www.justice4families.org/wp-content/themes/j4f/images/logo.png" alt="Justice For Families"></img>
      <br />
      <br />
      <br />
      <br />
        <h3 className="display-4" ml='20px'>MISSION</h3>
        <p className="lead">The mission at Justice for Families is to stop the youth incarceration epidemic while advocating for investment in youth and their families.</p>
        <hr className="my-4" />

         <a className="btn btn-primary btn-lg" href="..." role="button">
          Learn more
        </a>

        {/* https://www.dropbox.com/s/bhmnzrsugld8kvu/IMG_0231.jpeg?dl=0 */}

        {/* <p>
          It uses utility classes for typography and spacing to space
          content out within the larger container.
        </p>
        {/* <a className="btn btn-primary btn-lg" href="..." role="button">
          Learn more
        </a> */}
        {/* <img src="https://images.pexels.com/photos/6185549/pexels-photo-6185549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Justice For Families"></img> */}
      </div>

      <div className="col-lg-6">
      <br />
<br />
<br />
<br />
  <div className='container'>
  <div className='container'>
  <div className='container'>
      <h5 className="display-8"><center>VISION</center></h5>
      {/* <img src="https://www.justice4families.org/wp-content/themes/j4f/images/logo.png" alt="Justice For Families"></img> */}
     
        <p className="lead">To stop the youth incarceration epidemic while advocate for investment in youth and their families.</p>
        <hr className="my-8" />
        <h5 className="display-8"><center>PURPOSE</center></h5>
        <p>
          It uses utility classes for typography and spacing to space
          content out within the larger container.
        </p>
        {/* <a className="btn btn-primary btn-lg" href="..." role="button">
          Learn more
        </a> */}
      </div>
      </div>
    </div>
    </div>
    </div> 
    </div>   
    </div>
    </div>

</div>
    )
}

export default Jumbotron

    

