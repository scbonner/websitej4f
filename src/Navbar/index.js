import React from 'react'
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




function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                 <div class="container-fluid">
                     <a href="strance" class="navbar-brand mr-3">J4F</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                             <span class="navbar-toggler-icon"></span>
                        </button> 

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="ourteam" class="nav-item nav-link active">Our Team</a>
                <a href="partners" class="nav-item nav-link">Partnerships</a>
                <a href="families" class="nav-item nav-link">Families</a>
                <a href="policy" class="nav-item nav-link">Policy</a>
                <a href="trainings" class="nav-item nav-link">Trainings</a>
            </div>
                {/* <div class="navbar-nav ml-auto">
                    <a href="register" class="nav-item nav-link">Register</a>
                    <a href="login" class="nav-item nav-link">Login</a>
                </div> */}
                </div>
             </div>    
            </nav>
            </div>
    
    )
}

export default Navbar


