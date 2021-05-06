import React, {useState} from 'react'
import Heading from '../components/headingAnnimation';
import $ from 'jquery';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Back from '../images/back.jpg';
// import {ReactComponent as BackgroundCurve} from '../components/SVG/BackgroundCurve.svg';

export default function HomePage() {

    var scrollToNew = false

    function actOnScroll(){
        
        if(window.scrollY === 0 ){
            $('.top, .content').removeClass('scrolled');
            scrollToNew = false;
        }else if(window.scrollY > 150){
            $('.top, .content').addClass('scrolled');
            
            if(!scrollToNew){  
                window.scrollTo({
                    top: 14,
                    behavior: 'smooth'
                });
                scrollToNew = true;
            }
        }

        
    }

    window.addEventListener("scroll", actOnScroll);

    return (
        <div >
            
            <div className="top" >
	            <Heading
                    cla="concept-one"
                    heading="Welcome To OCS-IIITR"
                />
                {/* <div className="mainD">
                    <div className="d1"></div>
                    <div className="d2"></div>
                    <div className="d3"></div>
                    <div className="d4"></div>
                </div> */}
                <div className = "scrollNoti"  >
                    <span >Scroll Down <ArrowDownwardIcon style={{transform: "rotate(-90deg)"}} /> </span>
                </div>
            </div>

            <div className="content">
	            <h1 style={{display:'flex',flexDirection:'row'}}>
                    Content of Front Page Goes Here
                </h1>
            </div>
        </div>

    )
}

