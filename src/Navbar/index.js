import React from 'react'
/import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// function NavBar() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
//                 <div className="container-fluid">
//                      <a href="strance" className="navbar-brand mr-3">J4F</a>
//                         <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//                              <span className="navbar-toggler-icon"></span>
//                          </button> 

//                             <div className="collapse navbar-collapse" id="navbarCollapse">
//                                 <div className="navbar-nav">
//                                     <a href="home" className="nav-item nav-link active">Home</a>
//                                     <a href="who we are" className="nav-item nav-link">Who We Are</a>
//                                     <a href="instructors" className="nav-item nav-link">Instructors</a>
//                                     <a href="special events" className="nav-item nav-link">Special Events</a>
//                                 </div>

//                                     <div className="navbar-nav ml-auto">
//                                         <a href="register" className="nav-item nav-link">Register</a>
//                                         <a href="login" className="nav-item nav-link">Login</a>
//                                     </div>
//                             </div>
//                         </div>    
//             </nav>
//         </div>
//     )
// }



const Navbar = () => (
// function Navbar() {
    // return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                 <div className="container-fluid">
                     <a href="j4f" className="navbar-brand mr-3">J4F</a>
                     {/* <AnchorLink href='#j4f'>J4F</AnchorLink> */}
    <AnchorLink href='#ourteam' className="navbar-brand mr-1">Our Team</AnchorLink>
    <AnchorLink href='#partnerships' className="navbar-brand mr13">Partnerships</AnchorLink>
    <AnchorLink href='#institute' className="navbar-brand mr-1">Family Institute</AnchorLink>
    <AnchorLink href='#policy' className="navbar-brand mr-1">Policy</AnchorLink>
    <AnchorLink href='#trainings' className="navbar-brand mr-1">Trainings</AnchorLink>
                        {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                             <span className="navbar-toggler-icon"></span>
                        </button>  */}

                        {/* const SmoothScroll = () => ( */}
  {/* <div> */}
    {/* <AnchorLink href='#j4f'>J4F</AnchorLink>
    <AnchorLink href='#ourteam'>Our Team</AnchorLink>
    <AnchorLink href='#partnerships'>Partnerships</AnchorLink>
    <AnchorLink href='#institute'>Family Institute</AnchorLink>
    <AnchorLink href='#policy'>Policy</AnchorLink>
    <AnchorLink href='#trainings'>Trainings</AnchorLink> */}
 
    {/* <section id='j4f'>
      <h2>J4F</h2>
    </section>
    <section id='ourteam'>
      <h2>Our Team</h2>
    </section> */}
  </div>

        {/* <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="ourteam" className="nav-item nav-link active">Our Team</a>
                <a href="partnerships" clasNames="nav-item nav-link">Partnerships</a>
                <a href="families" className="nav-item nav-link">Families</a>
                <a href="policy" className="nav-item nav-link">Policy</a>
                <a href="trainings" className="nav-item nav-link">Trainings</a>
            </div> */}
                {/* <div class="navbar-nav ml-auto">
                    <a href="register" class="nav-item nav-link">Register</a>
                    <a href="login" class="nav-item nav-link">Login</a>
                </div> */}
            
          
            </nav>
        </div>
    
    )


export default Navbar


