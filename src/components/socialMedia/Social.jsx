import React from 'react';
import './_social.scss';


const insta =  "/" ;
const fb =  "/" ;
const github = "/" ;
const twitter = "/" ;



export default function Social(props) {
    return (
        <div className={`social ${props.annimation}`}>

            <div className="socialIcon">
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-instagram fa-2x" onClick={()=>{window.open(insta, "_blank")}}></i>
                
            </div>

            <div className="socialIcon">
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-facebook fa-2x"  onClick={()=>{window.open(fb, "_blank")}}></i>
            </div>

            <div className="socialIcon">
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-github fa-2x"  onClick={()=>{window.open(github, "_blank")}}></i>
            </div>

            <div className="socialIcon">
                <svg height="80" width="80">
                    <circle cx="40" cy="40" r="1.5vmax" stroke="white" strokeWidth="4" fill="none"></circle>
                </svg>
                <i className="fab fa-twitter fa-2x"  onClick={()=>{window.open(twitter, "_blank")}}></i>
            </div>
            
        </div>
    )
}