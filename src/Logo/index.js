import React from 'react'
import logo from './logo.png';


function Logo() {
    return(
//display of image, position, height and weigth
//adding spaces and a horizontal line for separation
        <>
             <div className="app">
        <br />
        <br />
                 <img src={logo} height={100} width={300} alt='...'></img>
             </div>
   
                <div className='container'>
                    <img src='https://images.pexels.com/photos/6698318/pexels-photo-6698318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=140' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/6190858/pexels-photo-6190858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=140' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4546144/pexels-photo-4546144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=240' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/3704379/pexels-photo-3704379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/4400973/pexels-photo-4400973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=280' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=180' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/5905866/pexels-photo-5905866.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100&w=160' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' alt="..." ></img>
                    <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250'alt="..." ></img>
                </div>

                <div className="lineadditions">
                    <br />
                    <br />
                    <br />
                    <hr />
                </div>
    
        </>
    

    )
};



export default Logo;

