import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'





function Card() {
    return (
       
<>
<br />
<br />

<br />
<hr />

{/* first card represents trainings */}


<div className='container'>
<h2><strong>WHO WE ARE</strong></h2>
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div classNames="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">FAMILIES</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">PARTNERSHIPS</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
      <i className="fas fa-users"></i>
         <small className="text-muted">Last updated 3 mins ago</small> 
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">POLICY</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
    
        <small className="text-muted">Last updated 3 mins ago</small> 
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='https://images.pexels.com/photos/6257110/pexels-photo-6257110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">ADVOCACY</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div> 
</div>

<hr />

<br />
<br />
<br />
</>

    )
}

export default Card
