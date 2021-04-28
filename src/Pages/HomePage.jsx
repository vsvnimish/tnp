import React from 'react'
import Heading from '../components/headingAnnimation';
import $ from 'jquery';
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
            
            <div className="top">
	            <Heading
                    class="concept-one"
                    heading="Welcome To OCS-IIITR"
                />
                {/* <BackgroundCurve
                    className='curve'
                /> */}
            </div>

            <div className="content">
	            <h1 style={{display:'flex',flexDirection:'row'}}>
                    Content of Front Page Goes Here
                </h1>
            </div>
        </div>

        
    )
}

