import React from 'react'
import './cardflip.css'

// export default function CardFlip() {
//    return (

 


class CardFlip extends React.Component {
   render() {
    return(
        <div>
         <div className="card">
           <img src={this.props.img} alt="..." />
           <div className="card-body">
             <h2>{this.props.title}</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             <h5>{this.props.author}</h5>
           </div>
         </div>

         <div className="card">
           <img src={this.props.img} alt="..."/>
           <div className="card-body">
             <h2>{this.props.title}</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             <h5>{this.props.author}</h5>
           </div>
         </div>
         <div className="card">
           <img src={this.props.img} alt="..." />
           <div className="card-body">
             <h2>{this.props.title}</h2>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             <h5>{this.props.author}</h5>
           </div>
         </div>
         <div className="card">
           <img src={this.props.img} alt="..."/>
           <div className="card-body">
             <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             <h5>{this.props.author}</h5>           
             </div>
         </div>
         </div>

        
       )
   }
 }

export default CardFlip;