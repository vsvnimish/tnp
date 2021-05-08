import React from 'react'
import Heading from '../components/headingAnnimation';
import $ from 'jquery';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


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
                <div className="aboutIIITR">
                    Hello
                </div>

                <div class="news" >
                    <hr className="line" />
                    <h1>
                        Updates
                    </h1>
                </div>

                <div className = "scrollNoti"  >
                    <i class="fas fa-2x fa-angle-double-down"></i>
                </div>
            </div>

            <div className="content">
	            <div className="mission" >
                    <h1 style={{display:'flex',flexDirection:'row'}}>
                        Content of Front Page Goes Here
                    </h1>
                </div>
            </div>
        </div>

    )
}

