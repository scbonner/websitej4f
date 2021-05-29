import React from 'react'

function Grace() {
    return (

<div className='container'>
<main style={{ minHeight: `100vh`, padding: `3rem 3rem`, }} className="has-dflex-center">
        <section style={{ minHeight: `100vh`, padding: `2rem 0`,  }}>
           <div className="lx-container-70">
              <div className="lx-row">
                <h4 style= {{ fontSize: `45px`, fontWeight: `bold`, }} 
                  className="title">J4F Team</h4>
              </div>

           <div style= {{ gridTemplateRows: `auto 1fr auto`, backgroundSize: `contain`,
                backgroundPosition: `center`, backgroundRepeat: `no-repeat`, }}
                className="lx-row align-stretch">
           <div style= {{ display: `flex`, alignItems: `center`, justifyContent: `flex-end`, maxWidth: `25rem`, float: `left`,
                width: `45%`, padding: `10px`, }} 
                className="lx-column column-user-pic">
           <div style= {{ width: `50%`, maxWidth: `30rem`, margin: `6rem .05rem`, display: `flex`, flexFlow: `wrap column`, 
                alignItems: `center`, justifyContent: `center`, borderRadius: `0.25rem`, backgroundColor: `white`, }}
                className="profile-pic bs-md">
            {/* <ProfilePic /> */}
           <div style= {{ width: `20rem`, height: `20rem`, position: `relative`, overflow: `hidden`, borderRadius: `50%`, }} 
                className="pic bs-md">      
                       
              <img style= {{ width: `60%`, height: `60%`, objectFit: `cover`, objectPosition: `center`, }} 
                    src="https://bit.ly/3jRbrbp" alt="" loading="lazy" ></img>

                  
           </div>
        </div>
       </div> 

              </div>
        </div>

        <div className="8x-column">          
         <form action="get">
             <div className="fieldset">
               <label htmlfor="user-name">Current Team's Name</label>
               <div id="user-name-helper" class="helper">
                 <p>Your name can appear on the platform, in your contributions or where it is mentioned.</p>
               </div>

               <div className="input-wrapper">
                 <span className="icon"><i className="fas fa-user"></i></span>
                
               </div>

               </div>
            
               
           </form>
         </div>
       
         
       
    
       
   </section>
 </main>
    
      </div>
  
    
        
    
    )
}

export default Grace
