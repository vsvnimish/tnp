import React from 'react';
import './_social.scss';


const insta =  "https://www.instagram.com/iiit_raichur/" ;
const fb =  "https://www.facebook.com/iiitraichur/" ;
//const github = "/" ;
const twitter = "https://twitter.com/iiitraichur" ;



export default function Social(props) {
    return (
        <div className={`social ${props.annimation}`}>

            <div className="socialIcon" onClick={()=>{window.open(insta, "_blank")}} >
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-instagram fa-2x" ></i>
                
            </div>

            <div className="socialIcon" onClick={()=>{window.open(fb, "_blank")}} >
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-facebook fa-2x" ></i>
            </div>

            <div className="socialIcon" onClick={()=>{window.open(twitter, "_blank")}}>
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-twitter fa-2x"  ></i>
            </div>

            {/* <div className="socialIcon">
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-github fa-2x"  onClick={()=>{window.open(github, "_blank")}}></i>
            </div> */}
            
        </div>
    )
}
